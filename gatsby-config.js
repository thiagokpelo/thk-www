// jshint ignore: start

module.exports = {
  siteMetadata: {
    title: 'Thiago Kpelo',
    description: 'Fullstack developer - (Javascript | ReactJs | React Native | Nodejs)',
    siteUrl: 'https://thiagokpelo.dev',
    author: {
      name: 'Thiago Kpelo',
      url: 'https://twitter.com/thiagokpelo',
      email: 'thiagokpelo@gmail.com'
    }
  },
  plugins: [{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thiago Kpelo`,
        short_name: `Thiago Kpelo`,
        start_url: `/`,
        background_color: `#222237`,
        theme_color: `#222237`,
        display: `minimal-ui`,
        // icon: `src/content/media/favicons/favicon-32x32.png`,
        // icons: [{
        //     src: `src/content/media/favicons/favicon-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        // {
        //   src: `/favicons/apple-chrome-180x180.png`,
        //   sizes: `180x180`,
        //   type: `image/png`,
        // },
        // {
        //   src: `/favicons/ms-chrome-310x310.png`,
        //   sizes: `310x310`,
        //   type: `image/png`,
        // },
        // ], // Add or remove icon sizes as desired
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Patua+One:400', 'Roboto+Mono:400,700']
        }
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
