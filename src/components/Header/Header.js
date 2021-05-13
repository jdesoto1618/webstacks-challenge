import * as React from "react"
import { Link } from "gatsby"
import { navbar, homeNavLink } from "../../styles/header.module.css"

export default function Header() {
  return (
    <nav className={navbar}>
      <Link className={homeNavLink} to='/' />
    </nav>
  )
}
