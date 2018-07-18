<template lang="pug">
  div
    navbar(
      :data="navbar"
    )
    logo
    about(
      :data="about"
    )
    work(
      :work="work"
      :clients="client"
    )
    service(
      :data="service",
      :services="services"
    )
    testimonial(
      :data="testimonials"
      :testimonials="testimonial"
    )
    contact(
      :data="contact"
    )
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Logo from '~/components/Logo.vue';
import About from '~/components/About.vue';
import Work from '~/components/Work.vue';
import Service from '~/components/Service.vue';
import Testimonial from '~/components/Testimonial.vue';
import Contact from '~/components/Contact.vue';
import { client } from '~/plugins/contentful.js';

export default {
  components: {
    Navbar,
    Logo,
    About,
    Work,
    Service,
    Testimonial,
    Contact
  },
  async asyncData({ error }) {
    let result = {};

    const data = await Promise.all(
      [
        'navbar',
        'about',
        'work',
        'client',
        'testimonial',
        'testimonials',
        'service',
        'services',
        'contact'
      ].map(x => client.getEntries({ content_type: x }))
    ).catch(e => error(e.message));

    data.forEach((element, index) => {
      if (data[index].items[0].sys.contentType.sys.id === 'client') {
        result[data[index].items[0].sys.contentType.sys.id] = data[
          index
        ].items.slice(0, 7);
      } else if (
        data[index].items[0].sys.contentType.sys.id === 'testimonial' ||
        data[index].items[0].sys.contentType.sys.id === 'services'
      ) {
        result[data[index].items[0].sys.contentType.sys.id] = data[
          index
        ].items.map(({ fields }) => fields);
      } else {
        result[data[index].items[0].sys.contentType.sys.id] =
          data[index].items[0].fields;
      }
    });

    return result;
  },
  mounted() {
    if (process.browser) {
      const wowjs = require('wowjs');

      const wow = new wowjs.WOW();
      wow.init();
    }
  }
};
</script>
