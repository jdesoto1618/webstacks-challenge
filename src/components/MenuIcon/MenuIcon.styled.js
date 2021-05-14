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
  z-index: 50;

  &:focus {
    outline: none;
  }

  div {
    width: 3.25rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.white};
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.1rem;
  }
`