const pkg = require('./package')

const glob = require('glob')
const path = require('path')

var getDynamicRoutes = function() {
  return [].concat(
    glob
      .sync('*.md', { cwd: 'posts/' })
      .map((filepath) => `/software/${path.basename(filepath, '.md')}`),
    glob
      .sync('*.md', { cwd: 'blog/' })
      .map((filepath) => `/blog/${path.basename(filepath, '.md')}`)
  )
}



var dynamicPaths = getDynamicRoutes()

module.exports = {
  generate: {
    routes: dynamicPaths
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'Arielle Cerini' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css', crossorigin: 'anonymous' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'}
    ]
  },
 
  loading: { color: '#fff' },



  /*
  ** Configuration for @nuxtjs/pwa
  ** https://developer.mozilla.org/en-US/docs/Web/Manifest
  */
  manifest: {
    name: 'A.Cerini Designs',
    short_name: 'A.Cerini Designs',
    description: 'Critical Creative Practitioner and Digital Designer',
    theme_color: '#172b4d',
  },

  meta: {
    // apple-mobile-web-app-capable=yes
    // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
    mobileAppIOS: true,
    appleStatusBarStyle: '#172b4d'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/argon/vendor/nucleo/css/nucleo.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~assets/argon/scss/argon.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~assets/transitions.css',
    '~assets/example.css',
    '~/assets/sass/now-ui-kit.scss',
    '~/assets/sass/demo.scss',
    '~assets/style.css'

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   {src: '~/plugins/argon/argon-kit'},
   {src: '~/plugins/vue-ctx.js'},
    {src:'~/plugins/common.js'},
    { src: '~/plugins/globalDirectives.js', ssr: false },
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/now-ui-kit' },
    { src: '~/plugins/vue-kinesis.js', mode: 'client' },
    { src: '~/plugins/googleAnalytics.js', mode: 'client' }
  ],
  // plugins: [{ src: "~/plugins/AOS", ssr: false }],
  

  /* 
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', {
      bootstrapCSS: false,
      bootstrapVueCSS: false,
      componentPlugins: [
        'Carousel',
        'Spinner'
      ],
      directivePlugins: [
        'Tooltip',
        'Popover'
      ]
    }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  server: {
    port: 8000, // default: 3000
    //host: '172.104.217.73' // default: localhost when posting to server should read 172.104.217.73
    host: 'localhost'
  },
  sitemap: {
    hostname: 'acerinidesigns.com',
    routes() {
      return getRoutes();
    },
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: [path.resolve(__dirname, 'posts'), path.resolve(__dirname, 'blog')],
        loader: 'frontmatter-markdown-loader'
      })
    }
  }
}
