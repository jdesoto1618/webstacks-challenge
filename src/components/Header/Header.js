import * as React from "react"
import { useState, useRef } from "react"
import { useOnClickOutside } from '../hooks';
import { Link } from "gatsby"
import MenuIcon from "../MenuIcon/MenuIcon"
import Menu from "../Menu/Menu"
import * as headerStyles from "../../styles/header.module.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <>
      <div className={headerStyles.mobileHomeLinkContainer}>
        <Link className={headerStyles.homeNavLink} to='/' />
      </div>

      <div className={headerStyles.mobileNavContainer} ref={node}>
        <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
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
