/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "kali-academi-upgrade",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "/public/static/Kali_academy_-_Logo-gris-removebg-icon.png",
        icons: [
          {
            src: "/public/static/Kali_academy_-_Logo-gris-removebg-icon.png",
            sizes: "3848x1554", // icon size
            type: "image/png", // Type MIME de l'image
          },
        ],
      },
    },
  ],
}; w