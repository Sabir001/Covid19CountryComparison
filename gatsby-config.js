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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158864181-2"
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
        endpoints: [
          "https://us-east1-covid19-country-comparison.cloudfunctions.net/histories",
          "https://us-east1-covid19-country-comparison.cloudfunctions.net/recents"
        ]
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
    `gatsby-plugin-remove-serviceworker`
  ]
};
