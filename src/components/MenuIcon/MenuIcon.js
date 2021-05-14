import React from 'react';
import { bool, func } from 'prop-types';
import { StyledIcon } from './MenuIcon.styled'

const MenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <StyledIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'opened' : ''}>
      <div className='menu-bars bar-1'></div>
      <div className='menu-bars bar-2'></div>
      <div className='menu-bars bar-3'></div>
    </StyledIcon>
  )
}

MenuIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuIcon