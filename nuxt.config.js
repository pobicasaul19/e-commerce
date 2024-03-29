import data from './static/storedata.json'
let dynamicRoutes = () => { 
  return new Promise(resolve => {
    resolve(data.map(eL => `/product/${eL.id}`))
  })
}

export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eCommere | The Store' ,
    script: [{ src: 'https://js.stripe.com/v3/' },],
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap' }
    ]
  },

  generate: {
    routes: dynamicRoutes
  },

  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/currency.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  layouts: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
