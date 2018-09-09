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
      project-list.has-8x-padding-top(:work="work", :clients="client")
</template>
<script>
import { client } from '~/plugins/contentful.js';
import ProjectList from '~/components/ProjectList.vue';

export default {
  components: {
    ProjectList
  },
  async asyncData({ error }) {
    let result = {};

    const entries = await Promise.all(
      ['client', 'work'].map(x => client.getEntries({ content_type: x }))
    ).catch(e => error(e.message));

    entries.forEach(entry => {
      result[entry.items[0].sys.contentType.sys.id] = entry.items.map(
        ({ fields, sys }) => {
          return { ...fields, id: sys.id };
        }
      );
    });

    return result;
  },
  head() {
    return {
      title: 'Portfolio'
    };
  }
};
</script>
<style lang="stylus" scoped>
.has-8x-padding-top
  padding-top 0
</style>
