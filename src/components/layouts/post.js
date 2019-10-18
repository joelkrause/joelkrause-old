import React, { Component } from "react"
import Layout from "../global/layout"
import SEO from "../global/_seo"

// class PostTemplate extends Component {
//     render() {
//         const post = this.props.data.wpgraphql

//         return (
//             <Layout>
//                 <SEO title={post.title} />
//                 <div className="page__hero single__post">
//                     <div className="wrapper">
//                         {/* <h1 className="page__icon" dangerouslySetInnerHTML={{ __html: post.acf.icon }} /> */}
//                         <h1 className="page__title" dangerouslySetInnerHTML={{ __html: post.title }} />
//                         <p className="post__date" dangerouslySetInnerHTML={{ __html: post.date }}/>
//                         <p className="post__date" dangerouslySetInnerHTML={{ __html: post.modified }}/>
//                     </div>
//                 </div>

//                 <div className="wrapper">
//                     <div dangerouslySetInnerHTML={{ __html: post.content }} />
//                 </div>
//             </Layout>
//         )
//     }
// }
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
            <p className="post__date" dangerouslySetInnerHTML={{ __html: date }}/>
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