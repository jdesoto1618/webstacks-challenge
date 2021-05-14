import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import MenuIcon from "../MenuIcon/MenuIcon"
import * as headerStyles from "../../styles/header.module.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={headerStyles.mobileHomeLinkContainer}>
        <Link className={headerStyles.homeNavLink} to='/' />
      </div>

      <div className={headerStyles.mobileNavContainer}>
        <MenuIcon></MenuIcon>
      </div>

      <nav className={headerStyles.navbar}>
        <Link className={headerStyles.homeNavLink} to='/' />
        <ul className={headerStyles.headerNavUl}>
          <li className={headerStyles.headerNavLi}>
            <Link className={headerStyles.navLink} to='/'>What's included?</Link>
          </li>
          <li className={headerStyles.headerNavLi}>
            <Link className={headerStyles.navLink} to='/'>Pricing</Link>
          </li>
          <li className={headerStyles.headerNavLi}>
            <Link className={headerStyles.navLink} to='/'>Sign In</Link>
          </li>
          <li className={headerStyles.headerNavLi}>
            <Link className={headerStyles.navLink} to='/'>
              <span className={headerStyles.getStarted}>Get started</span>
              <span className={headerStyles.caretRight}>&gt;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
