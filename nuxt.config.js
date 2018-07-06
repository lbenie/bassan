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
      { lang: 'fr' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Bassan rédaction créative est une entreprise à Sherbrooke pour les différents type de rédaction. Inclus les réseaux sociaux, matériel corporatif, le web et plus encore.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Bassan, Bassan rédaction, Bassan rédaction créative, social media, Canada, CA, web, rédaction, website, site web, slogan, communiqué de presse, press release, analyse, analysis, planification stratégique, planification, production de contenu, création de contenu, content creation, content, content production'
      },
      {
        property: 'og:url',
        content: 'https://bassan.netlify.com'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f0c180' },
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
    vendor: ['contentful', 'wowjs']
  },
  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'tiny-slider/src/tiny-slider.scss', lang: 'sass' },
    { src: '~/assets/main.styl', lang: 'stylus' },
    '@fortawesome/fontawesome/styles.css',
    'animate.css/animate.css'
  ],
  plugins: [
    '~/plugins/fontawesome',
    '~/plugins/contentful',
    { src: '~/plugins/scrollto', ssr: false },
    { src: '~/plugins/isotope', ssr: false },
    { src: '~/plugins/imagesLoaded', ssr: false },
    { src: '~/plugins/tinySlider', ssr: false }
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
