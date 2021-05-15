import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import * as heroStyles from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allContentfulLayoutHeroImage {
            edges {
              node {
                headline
                backgroundImage {
                  fluid {
                    src
                  }
                  node_locale
                }
                heroTitle
                tagline
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className={heroStyles.heroContainer}>
            {data.allContentfulLayoutHeroImage.edges.map( ({node, index}) => (
              <img key={index} src={node.backgroundImage.fluid.src} alt='Hero background image'/>
            ))}
          </div>
          <div className={heroStyles.heroOverlay}></div>
          <div className={heroStyles.heroTaglineContainer}>
            {data.allContentfulLayoutHeroImage.edges.map( ({node, index}) => (
              <div>
                <h5 className={heroStyles.heroTitleSmall} key={index}>{node.headline}</h5>
                <h1 className={heroStyles.heroTitleLarge} key={index}>
                  <span className={heroStyles.weekendText}>{node.heroTitle}</span>
                </h1>
                <p className={heroStyles.heroTagline} key={index}>{node.tagline}</p>
              </div>
            ))}
          </div>
  
          <div className={heroStyles.heroCtaContainer}>
            <Link className={heroStyles.getStartedButton} to='/'>
              <span className={heroStyles.ctaText}>Get started</span>
              <span className={heroStyles.caretRight}>&gt;</span>
            </Link>
            <Link className={heroStyles.requestDemoButton} to='/'>
              <span className={heroStyles.ctaText}>Request a demo</span>
              <span className={heroStyles.caretRight}>&gt;</span>
            </Link>
          </div>
        </>
      )}
    />
  )
}

export default Hero