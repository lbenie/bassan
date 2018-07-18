<template lang="pug">
  section.section.has-background-bassan.has-section-margin
    .container
      .columns
        .column.is-half.is-offset-one-quarter.has-text-centered
          h2#contact.wow.fadeIn.is-uppercase.has-border-top.has-border-bottom(
            data-wow-delay="250ms"
          )
            | {{ data.title }}
      .columns(v-if="isSuccess")
        .column.is-7.is-offset-3
          .notification.is-primary
            button.delete(
              @click="toggle"
            )
            div(
              v-html="$md.render(data.quoteSentSuccess)"
            )
      form(
        method="POST"
        :action="emailUri"
      )
        .columns
          .column.is-10.is-offset-3
            .columns.is-multiline
              .column.is-4
                .field
                  label.label(
                    for="name"
                  ) Votre nom
                  .control
                    input#name.input(
                      type="text"
                      name="name"
                    )
              .column.is-4
                .field
                  label.label(
                    for="email"
                  ) Votre courriel
                  .control
                    input#email.input(
                      type="email"
                      name="_replyto"
                    )
              .column.is-8
                .field
                  label.label(
                    for="message"
                  ) Parlez-moi de votre projet
                  .control
                    textarea#message.textarea(
                      name="message"
                      v-model="message"
                    )
              .column.is-8
                button.button.is-bassan.is-selected.is-rounded.is-pulled-right.is-marginless
                  | Envoyer
              .column
                input(
                  type="hidden"
                  name="_subject"
                  value="Soumission"
                )
                input(
                  type="hidden"
                  name="_language"
                  value="fr"
                )
                input(
                  type="hidden"
                  name="_next"
                  :value="redirectUri"
                )
                input(
                  type="text"
                  name="_gotcha"
                  style="display:none"
                )

</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const hash = this.$route.hash;
    this.isSuccess = hash.includes('success');

    if (hash && hash.includes('contact')) {
      const link = document.querySelector(
        `a[id=link-${hash
          .replace(/\?\w*=/, '')
          .replace('#', '')
          .replace(/\d/g, '')}]`
      );

      this.$nextTick().then(() => {
        if (link) {
          link.click();
        }
      });
    }
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSuccess: false
    };
  },
  computed: {
    redirectUri() {
      return process.env.NODE_ENV === 'production'
        ? 'https://bassan.netlify.com/#contact?success=1'
        : 'http://localhost:3000/#contact?success=1';
    },
    emailUri() {
      return process.env.NODE_ENV === 'production'
        ? `//formspree.io/${process.env.EMAIL_ANDREE_ANNE}`
        : `//formspree.io/${process.env.EMAIL_LUCIEN}`;
    }
  },
  methods: {
    toggle() {
      this.isSuccess = !this.isSuccess;
    }
  }
};
</script>
