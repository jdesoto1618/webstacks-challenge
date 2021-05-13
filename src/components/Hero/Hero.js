import * as React from "react"
import * as heroStyles from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <>
      <div className={heroStyles.heroContainer}></div>
      <div className={heroStyles.heroOverlay}></div>
      <div className={heroStyles.heroTaglineContainer}>
        <h5 className={heroStyles.heroTaglineSmall}>America’s #1 Rated Adventure Platform</h5>
        <h1 className={heroStyles.heroTaglineH1}>
          <span>Take control of </span>
          <span>your weekends</span>
        </h1>
        <p className={heroStyles.heroTagline}>Find adventure anywhere.</p>
      </div>

      <div className={heroStyles.heroCtaContainer}>
        <button>Get started &gt;</button>
        <button>Request a demo &gt;</button>
      </div>
    </>
  )
}

export default Hero