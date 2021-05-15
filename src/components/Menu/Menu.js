import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Link } from 'gatsby'
import { menuData } from '../../data/MenuData'

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'opened' : ''}>
      {menuData.map((nav_link, index) => (
        <Link className='mobile-nav-link' to={nav_link.link} key={index} id={nav_link.text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}>
          {nav_link.text}
        </Link>
      ))}
    </StyledMenu>
  )
}

export default Menu