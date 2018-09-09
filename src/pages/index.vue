<template lang="pug">
  div
    //- social
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
    copyright
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Logo from '~/components/Logo.vue';
import About from '~/components/About.vue';
import Work from '~/components/Work.vue';
import Service from '~/components/Service.vue';
import Testimonial from '~/components/Testimonial.vue';
import Contact from '~/components/Contact.vue';
import Copyright from '~/components/Copyright.vue';
import Social from '~/components/Social.vue';
import { client } from '~/plugins/contentful.js';

export default {
  components: {
    Logo,
    About,
    Work,
    Service,
    Testimonial,
    Contact,
    Copyright,
    Social
  },
  async asyncData({ error }) {
    let result = {};

    const entries = await Promise.all(
      [
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

    entries.forEach(entry => {
      result[entry.items[0].sys.contentType.sys.id] = entry.items.map(
        ({ fields, sys }) => {
          return { ...fields, id: sys.id };
        }
      );
    });

    result.client = result.client.filter(x => x.featured);

    return result;
  },
  mounted() {
    if (process.browser) {
      const wowjs = require('wowjs');

      const wow = new wowjs.WOW({ mobile: false });
      wow.init();
    }
  }
};
</script>
