<template lang="pug">
  section.section.has-4x-padding-top
    .container
      .columns.is-centered.is-mobile.has-text-centered
        .column.is-2
          a.facebook(
            href="https://www.facebook.com/bassanredactioncreative/"
          )
            no-ssr
              font-awesome-icon(
                :icon="['fab', 'facebook']"
                size="2x"
              )
        .column.is-2
          a.google(
            href="https://plus.google.com/u/0/101459700306530713010"
          )
            no-ssr
              font-awesome-icon(
                :icon="['fab', 'google-plus-g']"
                size="2x"
              )
        .column.is-2
          a.linkedin(
            href="https://www.linkedin.com/in/andr%C3%A9e-anne-blais-auclair-b-a-92368b47/"
          )
            no-ssr
              font-awesome-icon(
                :icon="['fab', 'linkedin']"
                size="2x"
              )
        .column.is-2
          a.instagram(
            href="https://www.instagram.com/andreeblaisa/"
          )
            no-ssr
              font-awesome-icon(
                :icon="['fab', 'instagram']"
                size="2x"
              )
      .columns.is-centered.is-multiline
        .column.has-text-centered.is-uppercase
          | &copy; Bassan rédaction créative
          br
          | 2017 - {{ getCurrentYear }}
        .column.has-text-centered.is-full
          | Conçu et réalisé par&nbsp;
          a(
            href="https://lbenie.netlify.com/"
          )
            | Lucien Bénié

</template>
<script>
import moment from 'moment';
export default {
  computed: {
    getCurrentYear() {
      return moment().format('YYYY');
    }
  }
};
</script>
<style lang="stylus" scoped>
.facebook
  color #3b5998

  &:hover
    color lighten(#3b5998, 20)

.google
  color #db4437

  &:hover
    color lighten(#db4437, 20)

.linkedin
  color #007bb5

  &:hover
    color lighten(#007bb5, 20)

.instagram
  color #c32aa3

  &:hover
    color lighten(#c32aa3, 20)
</style>
