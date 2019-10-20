import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import { createLocalLink } from "../../utils"
import moment from "moment"


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
                    <div className="post__card-date">{moment(post.date).format("MMM Do YYYY")}</div>
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