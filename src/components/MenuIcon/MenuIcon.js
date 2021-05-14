import React from 'react';
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

export default MenuIcon