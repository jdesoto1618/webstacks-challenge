import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../stylesheets/app.css';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people. This pulls from index.js :)</h1>
  </Layout>
)

export default IndexPage
