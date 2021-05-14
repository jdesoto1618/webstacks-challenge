import styled from 'styled-components'

export const StyledIcon = styled.button`
  position: absolute;
  top: 3rem;
  bottom: auto;
  left: auto;
  right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.25rem;
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
    width: 3rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.white};
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.1rem;
    transform: rotate(0deg) scaleX(1.0) translate(0px, 0px);
  }

  &.opened {
    .menu-bars {
      background: ${({ theme }) => theme.black};
    }

    .bar-1 {
      transform: rotate(45deg) translateX(-0.3rem);
    }

    .bar-2 {
      transform: scaleX(0);
    }

    .bar-3 {
      transform: rotate(-45deg) translate(-0.2rem, -0.1rem);
    }
  }
`