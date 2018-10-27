<template lang="pug">
  section.section.has-section-margin
    .container
      .columns
        .column.is-3
          nuxt-link.card-footer-item.button.is-bassan.is-selected.is-rounded(
            :to="`/`"
          )
            no-ssr
              font-awesome-icon(
                :icon="['fas', 'angle-double-left']"
              )
            | &nbsp;&nbsp;Accueil
        .column.is-3
          nuxt-link.card-footer-item.button.is-bassan.is-selected.is-rounded(
            :to="`/portfolio`"
          )
            no-ssr
              font-awesome-icon(
                :icon="['fas', 'angle-left']"
              )
            | &nbsp;&nbsp;Projets
      .columns
        .column.is-half.is-offset-one-quarter.has-text-centered
          h1#about.wow.fadeIn.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ fields.title }}
      div(v-html="$md.render(fields.mandate || '')")
</template>
<script>
import { client } from '~/plugins/contentful.js';

export default {
  async asyncData({ error, params }) {
    const data = await client.getEntries({
      content_type: 'client',
      'fields.slug': params.slug
    });

    return data.items[0];
  },
  head() {
    return {
      title: this.fields.title
    };
  }
};
</script>
<style lang="stylus" scoped>
</style>
