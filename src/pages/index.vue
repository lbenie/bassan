<template lang="pug">
  div
    navbar(:data="navbar")
    logo
    about(:data="about")
    work(:work="work" :client="client")
    service
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Logo from '~/components/Logo.vue';
import About from '~/components/About.vue';
import Work from '~/components/Work.vue';
import Service from '~/components/Service.vue';
import { client } from '~/plugins/contentful.js';

export default {
  components: {
    Navbar,
    Logo,
    About,
    Work,
    Service
  },
  async asyncData({ error }) {
    let result = {};

    const data = await Promise.all(
      ['navbar', 'about', 'work', 'client'].map(x =>
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
  }
};
</script>
<style>
</style>
