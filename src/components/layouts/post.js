import React, { Component } from "react"
import Layout from "../global/layout"
import SEO from "../global/_seo"
import moment from "moment"

const Post = props => {
    const {
      location,
      data: {
        wpgraphql: { post },
      },
    } = props
    const { title, content, date } = post
    return (
        <Layout>
        <SEO title={title} />
        <div className="page__hero single__post">
            <div className="wrapper">
            <h1 className="page__title" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="post__date" dangerouslySetInnerHTML={{ __html: moment(date).format("MMM Do YYYY") }}/>
            <p className="post__date" dangerouslySetInnerHTML={{ __html: moment(date).startOf('hour').fromNow() }}/>
            </div>
        </div>
        <div className="wrapper">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        </Layout>
    )
  }
  
export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        date
        content
        uri
      }
    }
  }
`