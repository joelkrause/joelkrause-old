const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
}
`


exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;


    return new Promise((resolve, reject) => {

        // Pages
        graphql(pageQuery)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const pageTemplate = path.resolve("./src/components/layouts/page.js");

                _.each(result.data.allWordpressPage.edges, edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                });
            })

            .then(() => {
                graphql(postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/components/layouts/post.js");
                        const postsTemplate = path.resolve("./src/components/layouts/posts.js");

                        // Create Posts
                        createPage({
                            path: `/posts/`,
                            component: slash(postsTemplate)
                        });

                        _.each(result.data.allWordpressPost.edges, edge => {
                            createPage({
                                path: `/posts/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                },
                            });
                        });
                        resolve();
                    });
            });
        // ==== END POSTS ====
    });
};