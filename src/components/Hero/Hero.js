import * as React from "react"
import { heroContainer, heroOverlay } from '../../styles/hero.module.css';

const Hero = () => {
  return (
    <>
      <div className={heroContainer}></div>
      <div className={heroOverlay}></div> 
    </>
  )
}

export default Hero