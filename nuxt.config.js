import data from './data/albums.js'

export default {
  mode: 'spa',
  generate: {
    routes() {
      const res = data.albums
      return res.map((album) => {
        return {
          route: '/albums/' + album.title.replace(/ /g, '').toLowerCase()
        }
      })
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Dust, Etc. — Record label in Portland, ME.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dustetc.com/_nuxt/img/19fde88.jpg'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700'
      }
    ],
    script: [{}]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
