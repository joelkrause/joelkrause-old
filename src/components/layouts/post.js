import React, { Component } from "react"
import contentParser from "gatsby-wpgraphql-inline-images"
import Layout from "../global/layout"
import SEO from "../global/_seo"
import Author from "../global/_author"
import moment from "moment"
import Img from "gatsby-image"

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
    let posted = moment(postedTime).format("YYYY-MM-DD");

    let six = moment().subtract(6,'month').format("YYYY-MM-DD");
    let year = moment().subtract(12,'month').format("YYYY-MM-DD");
    
    if(moment(posted).isBefore(year)){
      var dateClass = 'red'
      var text = 'Post is probably outdated.'
    } else if(moment(posted).isBefore(six)) {
      var dateClass = 'orange'
      var text = 'Post should have some good resources but could be out of date.'
    } else {
      var dateClass = 'green'
      var text = 'Post is brand spankin\' new and is up to date.'
    }

    const pluginOptions = {
      wordPressUrl: `https://wordpress.joelkrause.co/`,
      uploadsUrl: `https://wordpress.joelkrause.co/wp-content/uploads/`,
    };

    return (
        <Layout>
        <SEO title={title} />
        <div className="page__hero single__post">
            <div className="wrapper">
            <div className="post__card-icon" style={{backgroundColor: postACF.iconColor}} dangerouslySetInnerHTML={{ __html: postACF.icon }} />
            <h1 className="page__title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="post__date_wrapper">
                <p className="post__date" dangerouslySetInnerHTML={{ __html: `Published on ` + postedTime }}/>
                <p className="post__date has--indicator">
                    <div className={`indicator `+dateClass} data-tooltip={text}></div>
                    <div className="text" dangerouslySetInnerHTML={{ __html: `Updated about ` + modifiedTime }}/>
                </p>
            </div>
            </div>
        </div>
        <div className="wrapper">
            <div>{contentParser({ content }, pluginOptions)}</div>
            <Author />
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