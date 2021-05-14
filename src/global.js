import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Inter";
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, p, a {
    color: ${({ theme }) => theme.white};
  }

  h1 {
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 1.23;
    margin: 0 0 2.4rem;
  }

  h5 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.22;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }

  p {
    font-weight: 200;
    font-size: 1.4rem;
    line-height: 1.21;
  }

  a {
    font-size: 1.44rem;
    font-weight: 500;
    line-height: 1.21;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    position: relative;
  }

  .page-container {
    position: relative;
    padding: 0 2rem;
  }

  @media screen and (min-width: 40em) {
    .page-container {
      padding: 0 5rem;
    }

    h1 {
      font-size: 4.5rem;
    }

    h5 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 64em) {
    .page-container {
      padding: 0 10rem;
    }

    h1 {
      font-size: 5rem;
    }

    h5 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 80em) {
    .page-container {
      padding: 0 20rem;
    }

    h1 {
      font-size: 5.6rem;
    }
  }
`