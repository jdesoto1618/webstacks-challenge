import * as React from "react"
import * as cardStyles from '../../styles/cards.module.css'
import { Link } from "gatsby"
import chopperImage from '../../images/chopper.png'
import vrImage from '../../images/vr-headset.png'
import mobileImage from '../../images/mobile-device.png'

const Cards = () => {
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