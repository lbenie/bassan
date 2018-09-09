<template lang="pug">
  .social-sharing
    no-ssr
      social-sharing(
        :url="url"
        title="Bassan Rédaction Créative"
        description="Bassan | Rédaction créative déniche les mots justes et les agence judicieusement pour donner vie à toutes vos idées sous une forme encore plus extraordinaire que vous ne l'auriez vous-même imaginé!"
        quote="Redonnez le pouvoir qui revient aux mots!"
        inline-template
      )
        div
          network(network='email')
            font-awesome-icon(
              :icon="['far', 'envelope']"
            )
          |  Courriel
          network(network='facebook')
            font-awesome-icon(
              :icon="['fab', 'facebook']"
              size="2x"
            )
          |  Facebook
          network(network='linkedin')
            font-awesome-icon(
              :icon="['fab', 'linkedin']"
              size="2x"
            )
          | Linkedin
</template>
<script>
export default {
  computed: {
    url() {
      return process.env.NODE_ENV === 'production'
        ? 'https://bassan.netlify.com/'
        : 'http://localhost:3000/';
    }
  }
};
</script>
<style lang="stylus" scoped>
.social-sharing
  position fixed
  top 50%
  z-index 10
</style>
