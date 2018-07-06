<template lang="pug">
  div
    navbar(:data="navbar")
    project-list.has-8x-padding-top(:work="work", :clients="client")
</template>
<script>
import { client } from '~/plugins/contentful.js';
import Navbar from '~/components/Navbar.vue';
import ProjectList from '~/components/ProjectList.vue';

export default {
  components: {
    Navbar,
    ProjectList
  },
  async asyncData({ error }) {
    let result = {};

    const data = await Promise.all(
      ['navbar', 'client', 'work'].map(x =>
        client.getEntries({ content_type: x })
      )
    ).catch(e => error(e.message));

    data.forEach((element, index) => {
      if (data[index].items[0].sys.contentType.sys.id === 'client') {
        result[data[index].items[0].sys.contentType.sys.id] = data[index].items;
      } else {
        result[data[index].items[0].sys.contentType.sys.id] =
          data[index].items[0].fields;
      }
    });

    return result;
  },
  head() {
    return {
      title: this.work.title
    };
  }
};
</script>
