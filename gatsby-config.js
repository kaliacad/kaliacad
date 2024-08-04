/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kali Academy`,
    siteUrl: `https://kaliacademy.org`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
  ],
};
