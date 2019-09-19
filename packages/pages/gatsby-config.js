require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  APIS,
  CONFIG,
  SCHEMAS,
  htmlSerializer,
  linkResolver,
  plugins,
} = require('@krapiva-org/utils')
const { about, authors, articles, index } = SCHEMAS
const productionPlugins = []

if (!process.env.DEV) {
  const host = APIS[process.env.PRISMIC_API]

  productionPlugins.push({
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: `https://${host}.krapiva.org`,
      sitemap: `https://${host}.krapiva.org/sitemap.xml`,
      policy: [
        { userAgent: 'Yandex', allow: '/' },
        { userAgent: '*', allow: '/' },
      ],
    },
  })
}

module.exports = {
  siteMetadata: {
    ...CONFIG,
    clientApi: process.env.SLS_API || false,
    origin: process.env.PRISMIC_API,
    special: process.env.SPECIAL || false,
    dev: process.env.DEV || false,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.META_API,
        accessToken: process.env.META_TOKEN,
        linkResolver,
        schemas: {
          about,
          index,
        },
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_API,
        accessToken: process.env.PRISMIC_TOKEN,
        linkResolver,
        htmlSerializer,
        shouldNormalizeImage: ({ node }) => {
          if (
            process.env.PRISMIC_API === 'krapiva-org' &&
            node.type === 'articles'
          ) {
            return false
          }
          return true
        },
        schemas: {
          authors,
          articles,
        },
      },
    },
    ...plugins,
    ...productionPlugins,
  ],
}
