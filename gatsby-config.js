/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "wordpress.joelkrause.co",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    },
  ]
}