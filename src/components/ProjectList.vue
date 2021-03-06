<template lang="pug">
  section.section
    .container
      .columns
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#work.wow.fadeIn.title.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ work[0].title }}
      .columns
        .column
          .buttons.is-centered
            button.button(
              v-for="(category, index) in work[0].categories"
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
              v-images-loaded:on.progress="layout"
              :item-selector="'element-item'"
              :list="clients"
              :options="option"
            )
              .card(
                v-for="(client, index) in clients"
                :key="index"
              )
                .card-image(v-if="client.logo")
                  figure.image
                    img(
                      :src="client.logo.fields.file.url"
                      alt="client.logo.fields.title"
                    )
                .card-content(
                  :class="{ 'has-border-top': client.logo }"
                )
                  .media.has-border-bottom(
                    v-if="!client.logo"
                  )
                    .media-cont.nt
                      p.subtitle.is-6
                        | {{ client.title }}
                  .content(
                    v-html="$md.render(client.exerpt || '')"
                  )
                  footer.card-footer
                    nuxt-link.card-footer-item.button.is-bassan.is-selected.is-rounded(
                      :to="`/portfolio/${client.slug}`"
                    )
                      | En savoir plus...
</template>
<script>
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
  data: () => ({
    currentLayout: 'masonry',
    selected: null,
    filterOption: 'Tous',
    option: {
      itemSelector: '.element-item',
      getFilterData: {
        Tous: () => true,
        'Rédaction créative': el => /rédaction/i.test(el.category),
        'Réseaux sociaux': el => /réseaux/i.test(el.category)
      }
    }
  }),
  methods: {
    filter(key) {
      this.$refs.grid.filter(key);
      this.filterOption = key;
    },
    layout() {
      this.$refs.grid.layout('masonry');
    }
  }
};
</script>
<style lang="stylus" scoped>
.card
  box-shadow 2px 3px 7px 5px rgba(0, 0, 0, .1)

  &:hover
    z-index 1
    margin-left .5rem
    transition transform .5s ease-in-out
    transform translate(10px, 20px)

.card-footer
  border-top 0

.grid
  border 1px solid #333

  &:after
    display block
    clear both
    content ''

.isoDefault
  min-height 210px

.element-item
  margin .5rem

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
@media (min-width: 1281px)
  .element-item
    width 18%

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/
@media (min-width: 1025px) and (max-width: 1280px)
  .element-item
    width 18%

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px)
  .element-item
    width 47%

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)
  .element-item
    width 47%

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/
@media (min-width: 481px) and (max-width: 767px)
  .element-item
    width 100%

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px)
  .element-item
    width 100%
</style>
