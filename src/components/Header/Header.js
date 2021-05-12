import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className='navbar'>
      <Link className='nav-link home-nav-link' to='/'>
        Brackets
      </Link>
    </nav>
  )
}

export default Header
