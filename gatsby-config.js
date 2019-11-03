let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Digital InnerPrize`,
    description: `Digital InnerPrize is where we help small businesses and entrepreneurs fully embrace modern ways of reaching their customers to succeed in today’s crowded marketplace your customers are online… and you need to meet them there`,
    author: `Digital InnerPrize`,
    projectData: [
      {
        title: 'Ubisoft',
        desc: `Provided development services to Ubisoft and helped build their homescreen and current game catalogue search. With the largest in-house game development staff in the world, Ubisoft gathers more than 14,000 team members in more than 40 studios around the world. Ubisoft attracts the best and brightest from all continents with talent, creativity & innovation at its core.`,
        urlText: 'Visit Website',
        imageFile: 'ubisoft.png',
        link:'https://www.ubisoft.com/en-us/',
      },
      {
        title: 'Makena Capital Investments',
        desc: `Provided development services to Makena in building their client portal. Makena Capital Management, LLC ('Makena'​) is an investment firm that manages multi‐asset class and single‐asset class portfolios on behalf of our clients with the goal of long‐term capital preservation and appreciation.`,
        urlText: 'Visit Website',
        imageFile: 'makena.png',
        link:'https://investments.makenacap.com',
      },
      {
        title: 'Winston Retail',
        desc: `Provided development services to Winston Retail to migrate an outdated legacy .NET system to NodeJS in AWS. The product leveraged Docker, Redis, CloudFront and several cutting edge tools and services.`,
        urlText: 'Visit Website',
        imageFile: 'winstonretail.png',
        link:'https://www.winstonretail.com/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `digital-innerprize-dotcom`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FB_PIXEL_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_ID
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
