import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../../styles/header.module.css"

export default function Header() {
  return (
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
          <Link className={headerStyles.navLink} to='/'>Get started
            <span className={headerStyles.caretRight}>&gt;</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
