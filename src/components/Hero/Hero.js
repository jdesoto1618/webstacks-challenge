import * as React from "react"
import { Link } from "gatsby"
import * as heroStyles from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <>
      <div className={heroStyles.heroContainer}></div>
      <div className={heroStyles.heroOverlay}></div>
      <div className={heroStyles.heroTaglineContainer}>
        <h5 className={heroStyles.heroTitleSmall}>America’s #1 Rated Adventure Platform</h5>
        <h1 className={heroStyles.heroTitleLarge}>
          <span>Take control of </span>
          <span className={heroStyles.weekendText}>your weekends</span>
        </h1>
        <p className={heroStyles.heroTagline}>Find adventure anywhere.</p>
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
  )
}

export default Hero