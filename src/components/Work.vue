<template lang="pug">
  section.section
    .container
      project-list(:work="work", :clients="clients")
      .columns
        .column.is-column-h-centered
          h3
            | Vous voulez voir tous les projets?
      .columns
        .column.is-column-h-centered
          nuxt-link.wow.tada.button.is-bassan.is-selected.is-rounded.has-negative-margin-top-3(
            to="/portfolio"
            data-wow-iteration="infinite"
            data-wow-duration="2s"
          )
            | Cliquez ici
</template>
<script>
import ProjectList from '~/components/ProjectList.vue';

export default {
  props: {
    work: {
      type: [Array],
      required: true
    },
    clients: {
      type: [Array],
      required: true
    }
  },
  components: {
    ProjectList
  }
};
</script>
