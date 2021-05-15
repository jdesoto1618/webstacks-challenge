import React from 'react';
import { StyledMenu } from './Menu.styled';
import { Link } from "gatsby"

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'opened' : ''}>
      <Link to='/'>What's included?</Link>
      <Link to='/'>Pricing</Link>
      <Link to='/'>Sign In</Link>
      <Link to='/'>Get started</Link>
    </StyledMenu>
  )
}

export default Menu