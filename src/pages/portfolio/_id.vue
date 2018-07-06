<template lang="pug">
  div
    navbar(:data="navbar")
    section.section
      .container
        h1
          | {{ client.title }}
        div(v-html="$md.render(client.mandate || '')")
</template>
<script>
import { client } from '~/plugins/contentful.js';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  async asyncData({ error, params }) {
    const clientData = await client
      .getEntry(params.id)
      .catch(e => error(e.message));
    const navbarData = await client
      .getEntries({ content_type: 'navbar' })
      .catch(e => error(e.message));

    return { client: clientData.fields, navbar: navbarData.items[0].fields };
  },
  head() {
    return {
      title: this.client.title
    };
  }
};
</script>
