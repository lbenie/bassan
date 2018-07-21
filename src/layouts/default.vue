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
    nuxt
</template>
<script>
export default {
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
<style lang="stylus" scoped>
.is-rounded
  width 50px
  border-radius 50% !important
</style>
