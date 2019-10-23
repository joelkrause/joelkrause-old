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
    const { title, content, date, modified, postACF, categories } = post
    const modifiedTime = moment(modified).startOf().fromNow()
    const postedTime = moment(date).format("DD/MM/YYYY")

    return (
        <Layout>
        <SEO title={title} />
        <div className="page__hero single__post">
            <div className="wrapper">
            <div className="post__card-icon" style={{backgroundColor: postACF.iconColor}} dangerouslySetInnerHTML={{ __html: postACF.icon }} />
            <h1 className="page__title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="post__date_wrapper">
                <p className="post__date" dangerouslySetInnerHTML={{ __html: `Published on ` + postedTime }}/>
                <p className="post__date" dangerouslySetInnerHTML={{ __html: `Updated about ` + modifiedTime }}/>
            </div>
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
        modified
        content
        uri
        postACF {
            icon
            iconColor
        }
      }
    }
  }
`