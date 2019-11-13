/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Joel Krause`,
    description: `Melbourne based frontend web developer`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `http://wordpress.joelkrause.co/graphql`,
      },
    },
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: `http://wordpress.joelkrause.co/`,
        uploadsUrl: `http://wordpress.joelkrause.co/wp-content/uploads/`,
        processPostTypes: [
          "Page", "Post"
        ],
        graphqlTypeName: 'wpgraphql'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
}