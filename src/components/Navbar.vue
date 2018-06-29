<template lang="pug">
  .container.is-fluid
    nav.navbar.is-transparent.is-fixed-top.has-border-bottom(
      ref="navbar"
    )
      .navbar-brand
        nuxt-link.navbar-item(
          to="/"
          v-scroll-to="`#top`"
        )
          img(
            src="~/static/logo.png"
            alt="Bassan"
            width="50"
            height="50"
          )
        .navbar-burger.burger(
          data-target="navbar-menu"
          @click="toggle"
        )
          span(
            aria-hidden="true"
          )
          span(
            aria-hidden="true"
          )
          span(
            aria-hidden="true"
          )
      .navbar-menu
        .navbar-end
          .navbar-item
            nuxt-link.navbar-item(
              v-for="(link, index) in data.navbar.links"
              :key="index"
              :to="`#${link.href}`"
              v-scroll-to="`#${link.href}`"
              :id="`link-${link.href}`"
            )
              | {{ link.text }}
</template>

<script>
const isActive = 'is-active';
const scroll = 'scroll';

export default {
  props: {
    data: {
      type: [Object],
      required: true
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener(scroll, e => this.handleScroll(e));
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener(scroll, e => this.handleScroll(e));
    }
  },
  methods: {
    handleScroll(e) {
      let currentNav = this.data.navbar.links.filter(link => {
        const $el = document.querySelector(`#${link.href}`);

        return $el && $el.getBoundingClientRect().top < 100;
      });

      this.data.navbar.links.forEach(link => {
        const $el = document.querySelector(`#link-${link.href}`);

        if (
          currentNav.length > 0 &&
          currentNav[currentNav.length - 1].href === link.href
        ) {
          $el.classList.add(isActive);
        } else if ($el) {
          $el.classList.remove(isActive);
        }
      });
    },
    toggle() {
      const $$links = Array.from(document.querySelectorAll('.navbar-burger'));

      $$links.forEach(el => {
        const target = el.dataset.target;
        const $target = document.querySelector(`.${target}`);

        el.classList.toggle(isActive);
        $target.classList.toggle(isActive);
      });
    }
  }
};
</script>
