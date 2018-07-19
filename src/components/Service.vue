<template lang="pug">
  section.section.has-background-bassan
    .container
      .columns.is-multiline
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#services.wow.fadeIn.title.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.title }}
        .column.is-12
          | {{ data.content }}
      .columns.is-multiline
        .wow(
          v-for="(service, index) in services"
          :key="index"
          data-wow-delay="250ms"
          data-wow-duration="2s"
          data-wow-offset="100"
          :class="{'slideInLeft': index % 2 === 0, 'slideInRight': index % 2 !== 0}"
        )
          .column.is-half.is-offset-one-quarter.has-text-centered
            h3.has-border-bottom
              | {{ service.title }}
          no-ssr
            .columns.is-multiline
              template(
                v-if="index % 2 === 0"
              )
                .column.is-3.is-offset-1.is-column-v-centered.is-column-h-centered
                  no-ssr
                    font-awesome-icon(
                      :icon="service.icon.split(' ')"
                      size="4x"
                    )
                .column.is-6.is-offset-1(v-html="$md.render(service.description)")
              template(
                v-else
              )
                .column.is-6.is-offset-1(v-html="$md.render(service.description)")
                .column.is-3.is-offset-1.is-column-v-centered.is-column-h-centered
                  no-ssr
                    font-awesome-icon(
                      :icon="service.icon.split(' ')"
                      size="4x"
                    )
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    services: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="stylus" scoped>
h3
  padding-bottom .25em
</style>
