import React, { Component } from "react"
import Layout from "../global/layout"
import SEO from "../global/_seo"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <SEO title={post.title} description={post.excerpt} />
                <div className="page__hero single__post">
                    <div className="wrapper">
                        <h1 className="page__icon" dangerouslySetInnerHTML={{ __html: post.acf.icon }} />
                        <h1 className="page__title" dangerouslySetInnerHTML={{ __html: post.title }} />
                        <p className="post__date" dangerouslySetInnerHTML={{ __html: post.date }}/>
                        <p className="post__date" dangerouslySetInnerHTML={{ __html: post.modified }}/>
                    </div>
                </div>

                <div className="wrapper">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            date(formatString: "MMMM DD, YYYY")
            modified(formatString: "MMMM DD, YYYY")
            content
            acf{
                icon
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`