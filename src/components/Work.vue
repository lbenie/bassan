<template lang="pug">
  section.section
    .container
      .columns
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#work.wow.fadeIn.title.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ work.title }}
      .columns
        .column
          .buttons.is-centered
            button.button(
              v-for="(category, index) in work.categories"
              :key="index"
              @click="filter(category)"
              class="is-bassan"
              :class="{ 'is-selected': filterOption === category }"
            )
              | {{ category }}
      .columns
        .column
          no-ssr
            isotope(
              ref="grid"
              @layout="currentLayout"
              :item-selector="'element-item'"
              :list="client"
              :options="option"
            )
              .card(
                v-for="(element, index) in client"
                :key="index"
              )
                // header.card-header.has-border-bottom
                //   p.card-header-title.has-text-centered
                //     | {{ element.fields.title }}
                .card-image(v-if="element.fields.logo")
                  figure.image
                    img(
                      :src="element.fields.logo.fields.file.url"
                      alt="element.fields.logo.fields.title"
                    )
                .card-content(
                  :class="{ 'has-border-top': element.fields.logo }"
                )
                  .media.has-border-bottom(v-if="!element.fields.logo")
                    .media-cont.nt
                      p.subtitle.is-6
                        | {{ element.fields.title }}
                  .content(v-html="$md.render(element.fields.exerpt || '')")
                  footer.card-footer
                    nuxt-link.card-footer-item.button.is-bassan.is-selected.is-rounded(:to="`/portofolio/${element.sys.id}`")
                      | En savoir plus...
</template>
<script>
export default {
  props: {
    work: {
      type: [Object],
      required: true
    },
    client: {
      type: [Array],
      required: true
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      window.setTimeout(() => {
        this.$refs.grid.iso.arrange();
      }, 150);
    });

    console.log(this.client);
  },
  data() {
    return {
      currentLayout: 'masonry',
      selected: null,
      sortOption: 'original-order',
      filterOption: 'Tous',
      option: {
        itemSelector: '.element-item',
        getFilterData: {
          Tous: () => true,
          'Rédaction créative': el => /rédaction/i.test(el.fields.category),
          'Réseaux sociaux': el => /réseaux/i.test(el.fields.category)
        }
      }
    };
  },
  methods: {
    filter(key) {
      this.$refs.grid.filter(key);
      this.filterOption = key;
    }
  }
};
</script>
<style lang="stylus" scoped>
.card {
  box-shadow: 2px 3px 7px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    z-index: 1;
    margin-left: 0.5rem;
    transition: transform 0.5s ease-in-out;
    transform: scale(1.15) translate(20px, 0px);
  }
}

.card-footer {
  border-top: 0;
}

.grid {
  border: 1px solid #333;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
}

.isoDefault {
  min-height: 210px;
}

.element-item {
  margin: 0.5rem;
  width: 340px;
}

@media (min-width: 769px) {
  .element-item {
    width: 250px;
  }
}
</style>
