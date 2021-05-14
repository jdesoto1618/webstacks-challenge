import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
  width: 50%;
  height: 100vh;
  text-align: left;
  padding: 8rem 4rem 0 4rem;
  position: absolute;
  top: 0;
  bottom: auto;
  left: auto;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 50;
  
  @media screen and (min-width: ${({ theme }) => theme.desktop__1024}) {
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: capitalize;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.black};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`