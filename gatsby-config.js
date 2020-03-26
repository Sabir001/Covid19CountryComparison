module.exports = {
  siteMetadata: {
    title: `Covid19 Country Comparison`,
    description: `Covid19 situation is now declared as pandemic. Here we can see comparison between countries in desired date ranges`,
    author: `Sharafat Ahmed Sabir`,
    url: "https://covid19comparison.iamsabir.com",
    siteUrl: "https://covid19comparison.iamsabir.com",
    image: `src/images/icon.png`,
    twitterUsername: "@SharafatSabir",
    social: {
      github: `sabir001`,
      facebook: `sabir01`,
      linkedIn: `sharafat-ahmed-sabir`
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148694175-1"
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1403512336492072"
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#197BEB`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: "gatsby-source-rest-api",
      options: {
        endpoints: ["https://us-central1-team-rnd-wpdev-arcom.cloudfunctions.net/histories"]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Covid19 Country Comparison`,
        short_name: `covid19-comparison`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#197BEB`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
