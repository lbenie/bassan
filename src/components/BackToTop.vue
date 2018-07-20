<template lang="pug">
  .container
    .columns(v-if="show")
      .column
        a.button.is-bassan.is-selected.is-rounded.is-pulled-right.is-fixed-bottom.is-marginless(
          href="#top"
          v-scroll-to="`#top`"
        )
          no-ssr
            font-awesome-icon(
              icon="angle-up"
              size="2x"
              transform="up-1"
          )
</template>
<script>
const scroll = 'scroll';

export default {
  data: () => ({
    show: false
  }),
  mounted() {
    if (process.browser) {
      window.addEventListener(scroll, e => this.handleScroll(e));
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener(scroll, e => this.handleScroll(e));
    }
  },
  methods: {
    handleScroll(e) {
      this.show = document.documentElement.scrollTop >= 650;
    }
  }
};
</script>
<style lang="stylus" scoped>
.is-fixed-bottom
  position fixed
  right 20px
  bottom 20px
  z-index 1

.is-rounded
  padding .5em
  border-radius 50% !important
</style>
