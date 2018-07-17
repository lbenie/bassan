<template lang="pug">
  section.section
    .container
      .columns.is-multiline
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#clients.wow.fadeIn.title.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.title }}
        .column.is-12
          | {{ data.content }}
        no-ssr
          .column.is-12
            tiny-slider#testimonials(
              ref="slider"
              items="1"
              :controls="false"
              :autoplayButtonOutput="false"
              mouse-drag
              autoplay
              loop
              autoplay-hover-pause
              speed=1000
              :autoplayTimeout=10000
            )
              .testimonial(
                v-for="testimonial in testimonials"
              )
                .columns
                  .col-5.is-column-h-centered
                    .pic(
                      v-if="testimonial.avatar"
                    )
                      figure.image.is-256x256
                        img(
                          :src="testimonial.avatar.fields.file.url"
                        )
                  .col-7
                    h3.title.has-text-centered.has-text-black {{ testimonial.title }}
                    span.post.has-text-centered(
                      v-if="testimonial.jobTitle"
                    ) {{ testimonial.jobTitle }}
                    .description(
                      v-html="$md.render(testimonial.content)"
                      :class="{ 'has-image': testimonial.avatar,  'has-left-margin': isMobile }"
                    )
</template>
<script>
export default {
  props: {
    testimonials: {
      type: [Array]
    },
    data: {
      type: [Object]
    }
  },
  data: () => {
    return {
      isMobile: null
    };
  },
  mounted() {
    this.isMobile = window ? window.innerWidth < 768 : true;
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/colors'

.has-left-margin
  margin-left 1.25em

.testimonial
  padding 35px
  padding-left 40px
  border 5px solid $orange-bassan
  border-right none
  border-left none
  border-radius 0 70px 0 70px

  .pic
    display inline-block
    overflow hidden
    margin-bottom 20px
    border-radius 50%

  .title
    display block
    margin 0 0 7px
    color $orange-bassan
    text-transform capitalize
    letter-spacing 1px
    font-weight 400
    font-family 'Dancing Script', cursive

  .post
    display block
    margin-top -40px
    margin-bottom 20px
    color $pure-black
    font-size 15px

  .description
    padding-right 40px
    padding-bottom 35px
    width 100%
    color $pure-black
    font-size 16px
    line-height 30px

    &.has-image
      padding-left 10px
</style>
