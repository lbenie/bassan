<template lang="pug">
  div
    no-ssr
      back-to-top(
        bottom="10px"
        right="2px"
        visibleoffset=700
        text="Haut"
        v-scroll-to="`#top`"
      )
        button.button.is-bassan.is-selected.is-rounded(
          type='button'
        )
          font-awesome-icon(
            icon="angle-up"
            size="2x"
            transform="up-2"
          )
    navbar(
      :data="navbar"
    )
    nuxt
</template>
<script>
import Navbar from '~/components/Navbar.vue';
import { client } from '~/plugins/contentful.js';

export default {
  components: {
    Navbar
  },
  data: () => {
    return {
      navbar: {}
    };
  },
  async mounted() {
    this.navbar = await client
      .getEntries({ content_type: 'navbar' })
      .catch(e => error(e.message));

    this.navbar = this.navbar.items[0].fields;

    if (process.browser) {
      const smoothscroll = require('smoothscroll-for-websites');

      smoothscroll({
        animationTime: 800,
        stepSize: 10,
        touchpadSupport: true
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.is-rounded
  width 50px
  border-radius 50% !important
</style>
