import React from 'react';
import { bool, func } from 'prop-types';
import { StyledIcon } from './MenuIcon.styled'

const MenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <StyledIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'opened' : ''}>
      <div></div>
      <div></div>
      <div></div>
    </StyledIcon>
  )
}

MenuIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuIcon