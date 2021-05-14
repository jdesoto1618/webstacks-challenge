import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from "gatsby"

const Menu = ({ isOpen }) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <Link to='/'>What's included?</Link>
      <Link to='/'>Pricing</Link>
      <Link to='/'>Sign In</Link>
      <Link to='/'>Get started</Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu