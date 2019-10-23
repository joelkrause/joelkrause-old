import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import { createLocalLink } from "../../utils"
import moment from "moment"
import { Controller, Scene } from 'react-scrollmagic';


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
          postACF {
            icon
            iconColor
          }
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
                <Controller>
                <Scene duration={100} classToggle="zap" triggerElement={`[data-post="post_`+post.id+`"]`} indicators={false}>
                <div className="post__card" data-post={`post_`+post.id}>
                <Link to={'posts/' + post.slug}>
                    <div className="post__card-icon" style={{backgroundColor: post.postACF.iconColor}} dangerouslySetInnerHTML={{__html: post.postACF.icon}}/>
                    <div className="post__card-title" dangerouslySetInnerHTML={{__html: post.title}}/>
                    <div className="post__card-date" dangerouslySetInnerHTML={{__html: moment(post.date).format("MMM Do YYYY")}}/>
                </Link>
                </div>
                </Scene>
                </Controller>
              )
            })}
        </div>
      )
    }}
  />
)

export default RecentPostsWidget