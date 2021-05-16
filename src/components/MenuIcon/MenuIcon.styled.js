import styled from 'styled-components'

export const StyledIcon = styled.button`
  position: absolute;
  top: 3.75rem;
  bottom: auto;
  left: auto;
  right: 3rem;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 70;

  &:focus {
    outline: none;
  }

  .menu-bars {
    width: 100%;
    height: 0.2rem;
    background: ${({ theme }) => theme.white};
    border-radius: 1rem;
    margin-bottom: 0.4rem;
    transition: all 0.3s linear;
    // transform-origin: 0.1rem;
    transform: rotate(0deg) scaleX(1.0) translate(0px, 0px);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &.opened {
    .menu-bars {
      background: ${({ theme }) => theme.black};
      margin-bottom: 0;
    }

    .bar-1 {
      transform: rotate(45deg) translate(0px, 0.3rem);
    }

    .bar-2 {
      transform: scaleX(0);
    }

    .bar-3 {
      transform: rotate(-45deg) translate(0px, -0.3rem);
    }
  }
`