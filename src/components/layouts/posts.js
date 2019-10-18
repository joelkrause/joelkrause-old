import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../global/layout"
import SEO from "../global/_seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <div className="page__hero">
      <div className="wrapper">
      <h1>Posts</h1>
      </div>
      </div>
      <div className="wrapper posts__cards">

      </div>
    </Layout>
  )
}