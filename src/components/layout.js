/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../global'
import { theme } from '../theme'
import Header from "./Header/Header"
import Hero from './Hero/Hero'
import Cards from './Cards/Cards'

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='page-container'>
        <>
          <GlobalStyles />
          <Header />
            <main>
              <Hero />
              <Cards />
            </main>
        </>
      </div>
    </ThemeProvider>
  )
}

export default Layout
