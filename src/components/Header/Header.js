import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className='navbar'>
      <Link className='nav-link home-nav-link' to='/'>
        <span className='nav-brackets-logo'></span>
      </Link>
    </nav>
  )
}

export default Header
