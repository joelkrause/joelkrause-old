import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/_seo"
import LatestPosts from "../components/latestposts"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="page__hero">
      <div className="wrapper">
      <h1>Hey, I'm Joel</h1>
      <p>I’m a passionate web developer from Melbourne, Australia – currently working at <a href="#" target="_blank">Raak</a>.</p>
      </div>
      </div>
      <div className="wrapper posts__cards">
        <header>
        <h2>Latest Posts</h2>
        <Link to="/posts" className="button">View All Posts</Link>
        </header>
        <LatestPosts />
      </div>
    </Layout>
  )
}