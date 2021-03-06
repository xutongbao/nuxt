export default {
  target: 'static', // default is 'server'  static
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '小米书城',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '小米书城是基于vue服务端渲染的Demo项目' },
      { hid: 'Keywords', name: 'Keywords', content: '小米书城,Vue,电商' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/font_1594887_5sfi2gled8.css'
      }      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/light.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/light',
      '~/components/light/home'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:81',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'https://rough-tan-board.glitch.me'
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    cssSourceMap: true,
    extend(config) {
      config.devtool = 'source-map'
    }
  },

  buildDir: 'nuxt-dist',
  
  generate: {
    dir: 'docs'
  },
  router: {
    base: '/nuxt/'
  },
  loading: false,
  serverMiddleware: ['~/middleware/logger']
}
