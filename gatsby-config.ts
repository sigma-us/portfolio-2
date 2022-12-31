import type { GatsbyConfig } from "gatsby";
require('dotenv').config({
  path: `.env`,
});
// `.env.${process.env.NODE_ENV}`

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['user', 'post'],
  singleTypes: ['header'],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio-2`,
    siteUrl: `https://blog.kconley.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 630,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
};

export default config;
