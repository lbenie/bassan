require('dotenv').config();

module.exports = {
  /*
  ** Set source directory
  */
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bassan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: ['@vue/app']
    },
    extend(config, { isClient }) {
      config.resolve.alias['@fortawesome/fontawesome-free-brands$'] =
        '@fortawesome/fontawesome-free-brands/shakable.es.js';
      config.resolve.alias['@fortawesome/fontawesome-free-solid$'] =
        '@fortawesome/fontawesome-free-solid/shakable.es.js';
      config.resolve.alias['@fortawesome/fontawesome-free-regular$'] =
        '@fortawesome/fontawesome-free-regular/shakable.es.js';
      if (isClient) {
        config.resolve.alias = Object.assign(config.resolve.alias, {
          masonry: 'masonry-layout',
          isotope: 'isotope-layout'
        });
      }
    },
    vendor: [
      '~/plugins/fontawesome',
      'contentful',
      'wowjs',
      'vueisotope',
      'vue-images-loaded',
      'vue-scrollto'
    ]
  },
  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: '~/assets/main.styl', lang: 'stylus' },
    '@fortawesome/fontawesome/styles.css',
    'animate.css/animate.css'
  ],
  plugins: [
    '~/plugins/fontawesome',
    '~/plugins/contentful',
    { src: '~/plugins/wowjs', ssr: false },
    { src: '~/plugins/smoothscroll', ssr: false },
    { src: '~/plugins/isotope', ssr: false },
    { src: '~/plugins/imageloaded', ssr: false }
  ],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/markdownit'],
  markdownit: {
    injected: true,
    html: true
  },
  env: {
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID
  }
};
