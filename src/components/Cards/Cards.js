import * as React from "react"
import * as cardStyles from '../../styles/cards.module.css'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import chopperImage from '../../images/chopper.png'
import vrImage from '../../images/vr-headset.png'
import mobileImage from '../../images/mobile-device.png'

const Cards = () => {

  const imageData = useStaticQuery(graphql`
    query ImagesQuery {
      allImagesJson {
        edges {
          node {
            chopperImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heroImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            mobileImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            vrImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getImages(imageData) {
    const imagesArray = []
    imageData.allImagesJson.edges.forEach((image, index) => {
      imagesArray.push(
        <div key={index}>
          <GatsbyImage src={image.node.chopperImage.childImageSharp.fluid.src} fluid={image.node.chopperImage.childImageSharp.fluid.src}></GatsbyImage>
        </div>
        
      )
    })
  }

  return (
    <>
      <div className={cardStyles.cardsContainer}>
        <div className={cardStyles.card}>
          <img src={chopperImage} className={cardStyles.cardImage} />
          <div className={cardStyles.cardTextContainer}>
            <h5 className={cardStyles.cardTitle}>Augmented Reality</h5>
            <p className={cardStyles.cardTagline}>An interactive experience like no other.</p>
            <Link className={cardStyles.learnMore} to='/'>
              <span className={cardStyles.ctaText}>Learn more</span>
              <span className={cardStyles.caretRight}>&gt;</span>
            </Link>
          </div>
        </div>

        <div className={cardStyles.card}>
          <img src={vrImage} className={cardStyles.cardImage} />
          <div className={cardStyles.cardTextContainer}>
            <h5 className={cardStyles.cardTitle}>Virtual Reality</h5>
            <p className={cardStyles.cardTagline}>A truly immersive virutal experience.</p>
            <Link className={cardStyles.learnMore} to='/'>
              <span className={cardStyles.ctaText}>Learn more</span>
              <span className={cardStyles.caretRight}>&gt;</span>
            </Link>
          </div>
        </div>

        <div className={cardStyles.card}>
          <img src={mobileImage} className={cardStyles.cardImage} />
          <div className={cardStyles.cardTextContainer}>
            <h5 className={cardStyles.cardTitle}>Mobile</h5>
            <p className={cardStyles.cardTagline}>Earn points on the go with our mobile app.</p>
            <Link className={cardStyles.learnMore} to='/'>
              <span className={cardStyles.ctaText}>Learn more</span>
              <span className={cardStyles.caretRight}>&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards