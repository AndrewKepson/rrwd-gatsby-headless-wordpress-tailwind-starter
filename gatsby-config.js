require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `RRWD Headless WordPress with Tailwind Starter`,
    description: `Build a blazing fast, SEO friendly, headless WordPress site with Gatsby and Tailwind CSS using this starter by Red Rocks Web Development.`,
    author: `Red Rocks Web Development`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  trailingSlash: `always`,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WP_GRAPHQL_ENDPOINT,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          allow404Images: true,
          allow401Images: true,
        },
        schema: {
          typePrefix: `Wp`,
        },
        // searchAndReplace: [
        //   {
        //     search: process.env.WP_URL,
        //     replace: process.env.FRONT_END_URL,
        //   },
        // ],
        html: {
          useGatsbyImage: true,
          generateWebpImages: true,
          imageMaxWidth: 800,
          imageQuality: 90,
          createStaticFiles: true,
          placeholderType: `blurred`,
        },
        type: {
          Post: {
            limit: process.env.NODE_ENV === `development` ? 50 : 5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
