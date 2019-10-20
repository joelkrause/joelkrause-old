import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import { createLocalLink } from "../../utils"


const QUERY = graphql`
  {
    wpgraphql {
      posts(first: 5) {
        nodes {
          id
          title
          link
          slug
          date
        }
      }
    }
  }
`

const RecentPostsWidget = () => (
  <StaticQuery
    query={QUERY}
    render={data => {
      return (
        <div>
            {data.wpgraphql.posts.nodes.map(post => {
              return (
                <div className="post__card">
                <Link to={'posts/' + post.slug}>
                    <div className="post__card-icon"></div>
                    <div className="post__card-title">{post.title}</div>
                    <div className="post__card-date">{post.date}</div>
                </Link>
                </div>
              )
            })}
        </div>
      )
    }}
  />
)

export default RecentPostsWidget