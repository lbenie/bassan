<template lang="pug">
  div
    navbar(:data="navbar")
</template>
<script>
import { client } from '~/plugins/contentful.js';
import Navbar from '~/components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  async asyncData({ error }) {
    let result = {};

    const data = await Promise.all(
      ['navbar'].map(x => client.getEntries({ content_type: x }))
    ).catch(e => error(e.message));

    data.forEach((element, index) => {
      result[data[index].items[0].sys.contentType.sys.id] =
        data[index].items[0].fields;
    });

    return result;
  }
};
</script>
