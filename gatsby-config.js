module.exports = {

  siteMetadata: {
    title: 'Joopal Coin',
  },

  plugins: (true ? [
    'gatsby-plugin-react-helmet',

  ] : []).concat(process.env.NODE_ENV === "production" ? [
    { resolve: 'gatsby-plugin-google-analytics', 
      options: {
        trackingId: 'UA-102620770-2',
      }, }, // gatsby-plugin-google-analytics

  ] : []).concat([
    'gatsby-plugin-styled-components',

    { resolve: 'gatsby-plugin-manifest', // NOTE: place before `gatsby-plugin-offline`,
      options: {
        name:             'Joopal Coin',
        short_name:       'joopal-coin',
        start_url:        '/',
        background_color: '#f7f0eb',
        theme_color:      '#a2466c',
        orientation:      'portrait',
        display:          'minimal-ui',
        icons: [
          // Android
          {
            src: '/favicons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          }, {
            src: '/favicons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          }, {
            src: '/favicons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          }, {
            src: '/favicons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          }, {
            src: '/favicons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          }, {
            src: '/favicons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },

          // Apple
          {
            src: '/favicons/apple-icon-57x57.png',
            sizes: '57x57',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-114x114.png',
            sizes: '114x114',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          }, {
            src: '/favicons/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },

        ], // icons
      }, }, // gatsby-plugin-manifest

    { resolve: 'gatsby-plugin-offline', // NOTE: place after `manifest`,
      //options: {
        //staticFileGlobs: [
          //`${rootDir}/**/*.{js,woff2}`,
          //`${rootDir}/index.html`,
          //`${rootDir}/manifest.json`,
          //`${rootDir}/offline-plugin-app-shell-fallback/index.html`,
        //],
        //stripPrefix: rootDir,
        //navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
        //// Only match URLs without extensions.
        //// So example.com/about/ will pass but
        //// example.com/cheeseburger.jpg will not.
        //// We only want the service worker to handle our "clean"
        //// URLs and not any files hosted on the site.
        //navigateFallbackWhitelist: [/^.*(?!\.\w?$)/],
        //cacheId: `gatsby-plugin-offline`,
        //// Do cache bust JS URLs until can figure out how to make Webpack's
        //// URLs truely content-addressed.
        //dontCacheBustUrlsMatching: /(.\w{8}.woff2)/, //|-\w{20}.js)/,
        //runtimeCaching: [
          //{
            //// Add runtime caching of images.
            //urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
            //handler: `fastest`,
          //},
        //],
        //skipWaiting: false,
      //},
    }, // gatsby-plugin-offline
  ])

}
