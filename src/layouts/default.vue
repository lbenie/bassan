<template>
  <nuxt />
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
