import * as React from "react"
import * as cardStyles from '../../styles/cards.module.css'
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'

const Cards = () => {
  return (
    <StaticQuery
      query={graphql`
        query cardInfo {
          allContentfulCardsInfo {
            edges {
              node {
                cardDescription
                cardTagline
                cardImage {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className={cardStyles.cardsContainer}>
            {data.allContentfulCardsInfo.edges.map( ({node, index}) => (
              <div className={cardStyles.card} key={index}>
                <img src={node.cardImage.fluid.src} className={cardStyles.cardImage} />
                <div className={cardStyles.cardTextContainer}>
                  <h5 className={cardStyles.cardTitle}>{node.cardTagline}</h5>
                  <p className={cardStyles.cardTagline}>{node.cardDescription}</p>
                  <Link className={cardStyles.learnMore} to='/'>
                    <span className={cardStyles.ctaText}>Learn more</span>
                    <span className={cardStyles.caretRight}>&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    />
  )
}

export default Cards