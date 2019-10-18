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
      <h1>Hey, I'm Joel</h1>
      <p>I’m a passionate frontend web developer from Melbourne, Australia – currently working at <a href="#" target="_blank">Raak</a>.</p>
      </div>
      </div>
      <div className="wrapper posts__cards">
        <header>
        <h2>Latest Posts</h2>
        <Link to="/posts" className="button">See All Posts</Link>
        </header>
        {data.allWordpressPost.edges.map(({ node }) => (
            <div className="post__card">
            <Link to={'posts/' + node.slug}>
                <div className="post__card-icon"></div>
                <div className="post__card-title">{node.title}</div>
                <div className="post__card-date">{node.date}</div>
            </Link>
            </div>
        ))}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          slug
        }
      }
    }
  }
`