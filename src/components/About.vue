<template lang="pug">
  section.section.has-background-bassan.has-section-margin
    .container
      .columns
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#about.wow.fadeIn.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.title }}
      .columns.has-2x-padding-top.is-full-tablet
        .column.is-half
          div(
            v-html="$md.render(data.content)"
          )
        .column.is-column-v-centered.is-column-h-centered
          figure.image.is-480x480
            img.is-rounded(
              :src="data.avatar.fields.file.url"
              alt="Bassan"
            )
      .columns.is-multiline
        .column.is-half.is-offset-one-quarter.has-text-centered(
          :class="[{ 'has-4x-padding-top': !isMobile, 'has-negative-margin-top-8': isMobile }]"
        )
          h3.wow.fadeIn.is-uppercase.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.pathTitle }}
        .column.is-full.has-2x-padding-top
          div(
            v-html="$md.render(data.path)"
          )
</template>
<script>
export default {
  props: {
    data: {
      type: [Object],
      required: true
    }
  },
  data: () => ({
    isMobile: null
  }),
  mounted() {
    this.isMobile = window && window.innerWidth < 768;
  }
};
</script>

<style lang="stylus" scoped>
.has-border-top, .has-border-bottom
  border-color #666

h3
  padding-bottom .25em
</style>
