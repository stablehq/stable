/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/stable",
  siteMetadata: {
    title: "Site title",
    titleTemplate: "%s · Title Template",
    description: "Site description",
    image: "./src/assets/images/favicon.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
