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
    title: 'Bassan | Rédaction',
    meta: [
      { charset: 'utf-8' },
      { lang: 'fr' },
      { nativeUi: true },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Bassan | R&eacute;daction cr&eacute;ative d&eacute;niche les mots justes et les agence judicieusement pour donner vie &agrave; toutes vos id&eacute;es sous une forme encore plus/extraordinaire que vous ne l'auriez vous-m&ecirc;me imagin&eacute;!`
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Bassan, Bassan rédaction, Bassan rédaction créative, social media, Canada, CA, web, rédaction, website, site web, slogan, communiqué de presse, press release, analyse, analysis, planification stratégique, planification, production de contenu, création de contenu, content creation, content, content production'
      },
      {
        property: 'og:url',
        content: 'https://bassan.ca'
      },
      {
        property: 'og:img',
        content: '/og-image.jpg'
      },
      {
        property: 'og:image:height',
        content: '1257'
      },
      {
        property: 'og:image:width',
        content: '2400'
      },
      {
        property: 'og:title',
        content: 'Bassan | R&eacute;daction'
      },
      {
        property: 'og:description',
        content: `Bassan | R&eacute;daction cr&eacute;ative d&eacute;niche les mots justes et les agence judicieusement pour donner vie &agrave; toutes vos id&eacute;es sous une forme encore plus/extraordinaire que vous ne l'auriez vous-m&ecirc;me imagin&eacute;!`
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
    '~/plugins/fontAwesome',
    '~/plugins/contentful',
    '~/plugins/socialSharing',
    { src: '~/plugins/scrollTo', ssr: false },
    { src: '~/plugins/isotope', ssr: false },
    { src: '~/plugins/imagesLoaded', ssr: false },
    { src: '~/plugins/tinySlider', ssr: false },
    { src: '~/plugins/backToTop', ssr: false }
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  markdownit: {
    injected: true,
    html: true
  },
  env: {
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    EMAIL_ANDREE_ANNE: process.env.EMAIL_ANDREE_ANNE,
    EMAIL_LUCIEN: process.env.EMAIL_LUCIEN
  },
  manifest: {
    name: 'Bassan | Rédaction',
    short_name: 'Bassan',
    hostname: 'https://bassan.ca',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    start_url: '/index.html',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#f0c180'
  },
  'google-analytics': {
    id: process.env.GOOGLE_ANALYTICS
  },
  sitemap: {
    generate: true,
    hostname: 'https://bassan.ca/',
    cacheTime: 1000 * 60 * 15,
    gzip: true
  }
};
