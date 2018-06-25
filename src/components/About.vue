<template lang="pug">
  section.section.has-background-bassan.has-section-margin
    .container
      .columns
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#about.wow.fadeIn.title.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.title }}
      .columns.is-multiline.has-2x-padding-top
        .column.is-half
          div(v-html="$md.render(data.content)")
        .column
          figure.image.is-370x370.has-content-centered
            img.is-rounded(
              :src="data.avatar.fields.file.url"
              alt="Bassan"
            )
        // .column.is-12
        //   .has-padding-bottom.wow.lightSpeedIn(
        //     v-for="(value, key, index) in data.skills"
        //     :key="index"
        //     :class="[{ 'has-padding-top': index > 0 }]"
        //     :data-wow-delay="`${(index + 0.5) * 1.5 * 125}ms`"
        //   )
        //     .is-uppercase
        //       | {{ key }}
        //     progress.progress.is-bassan.is-large(
        //       :value="value"
        //       max="100"
        //     )
        //       | {{ key }}

        .column.is-half.is-offset-one-quarter.has-text-centered.has-4x-padding-top
          h3.wow.fadeIn.title.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.pathTitle }}
        .column.is-12.has-2x-padding-top
          div(v-html="$md.render(data.path)")
</template>
<script>
export default {
  props: {
    data: {
      type: [Object],
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.has-border-top, .has-border-bottom {
  border-color: #666;
}

.image {
  &.is-370x370 {
    height: 370px;
    width: 370px;
  }
}
</style>
