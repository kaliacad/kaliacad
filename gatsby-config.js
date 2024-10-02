/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kali Academy`,
    title: `Kali Academy`,
    siteUrl: `https://kaliacademy.org`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "/public/static/Kali_academy_-_Logo-gris-removebg-icon.png",
        icons: [
          {
            src: "/public/static/Kali_academy_-_Logo-gris-removebg-icon.png",
            sizes: "3848x1554",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "/public/static/Kali_academy_-_Logo-gris-removebg-icon.png",
        icons: [
          {
            src: "/public/static/Kali_academy_-_Logo-gris-removebg-icon.png",
            sizes: "3848x1554",
            type: "image/png",
          },
        ],
      },
    },
  ],
};
