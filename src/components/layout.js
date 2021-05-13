/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./Header/Header"
import Hero from './Hero/Hero'
import Cards from './Cards/Cards'
import * as layoutStyles from '../styles/layout.module.css'

const Layout = () => {
  return (
    <div className={layoutStyles.pageContainer}>
      <>
        <Header />
          <main>
            <Hero />
            <Cards />
          </main>
      </>
    </div>
  )
}

export default Layout
