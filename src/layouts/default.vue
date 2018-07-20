<template lang="pug">
  div
    back-to-top
    nuxt
</template>
<script>
import BackToTop from '~/components/BackToTop.vue';
export default {
  components: {
    BackToTop
  },
  mounted() {
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
