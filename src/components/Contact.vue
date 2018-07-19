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
          #success.notification.is-primary
            button.delete(
              @click="toggle($event)"
            )
            div(
              v-html="$md.render(data.quoteSentSuccess)"
            )
      .columns(v-if="errors.length")
        .column.is-7.is-offset-3
          #errors.notification.is-danger(
            :class="{'is-shrinked': !isMobile}"
          )
            button.delete(
              @click="toggle($event)"
            )
            | Veuillez corriger les erreurs suivantes:
            ol
              li.has-margin-left(
                v-for="(error, index) in errors"
                :key="index"
              )
                a(:href="error.input")
                  | {{ error.message }}
      form#form(
        method="POST"
        :action="emailUri"
        novalidate="true"
        @submit.prevent="submit"
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
                      v-model="name"
                    )
                    p.help.is-danger(
                      v-if="!isNameFieldBlank"
                    ) {{ requiredName }}
              .column.is-4
                .field
                  label.label(
                    for="email"
                  ) Votre courriel
                  .control
                    input#email.input(
                      type="email"
                      name="_replyto"
                      v-model="email"
                    )
                    p.help.is-danger(
                      v-if="!isEmailFieldBlank"
                    ) {{ requiredEmail }}
                    p.help.is-danger(
                      v-if="!isEmailFieldValid"
                    ) {{ invalidEmail }}
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
                    p.help.is-danger(
                      v-if="!isMessageFieldBlank"
                    ) {{ requiredMessage }}
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
    this.isMobile = this.isMobile = window ? window.innerWidth < 768 : true;

    if (hash && hash.includes('contact')) {
      const link = document.querySelector(
        `a[id=link-${hash
          .replace(/\?\w*=/, '')
          .replace('#', '')
          .replace(/\d/g, '')}]`
      );

      this.$nextTick().then(() => {
        if (link && this.isSuccess) {
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
      requiredName: 'Nom requis',
      requiredEmail: 'Courriel requis',
      invalidEmail: 'Entrez un courriel valide tel que: test@gmail.com',
      requiredMessage: 'Message requis',
      isSuccess: false,
      errors: [],
      isMobile: null
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
    },
    isNameFieldBlank() {
      return !this.errors.find(x => x.message === this.requiredName);
    },
    isEmailFieldBlank() {
      return !this.errors.find(x => x.message === this.requiredEmail);
    },
    isEmailFieldValid() {
      return !this.errors.find(x => x.message === this.invalidEmail);
    },
    isMessageFieldBlank() {
      return !this.errors.find(x => x.message === this.requiredMessage);
    }
  },
  methods: {
    toggle(e) {
      e.target.parentElement.style.display = 'none';
    },
    submit() {
      this.errors = [];
      const danger = 'is-danger';
      const success = 'is-success';

      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const message = document.querySelector('#message');

      if (!this.name) {
        this.errors.push({ message: this.requiredName, input: '#name' });
        name.classList.add(danger);
      } else {
        name.classList.remove(danger);
        name.classList.add(success);
      }

      if (!this.email) {
        this.errors.push({ message: this.requiredEmail, input: '#email' });
        email.classList.add(danger);
      } else if (!this.validateEmail(this.email)) {
        this.errors.push({ message: this.invalidEmail, input: '#email' });
        email.classList.add(danger);
      } else {
        email.classList.remove(danger);
        email.classList.add(success);
      }

      if (!this.message) {
        this.errors.push({ message: this.requiredMessage, input: '#message' });
        message.classList.add(danger);
      } else {
        message.classList.remove(danger);
        message.classList.add(success);
      }

      if (!this.errors.length) {
        document.querySelector('#form').submit();
      } else {
        const errorList = document.querySelector('#errors');

        if (errorList) {
          errorList.style.display = 'block';
        }
      }
    },
    validateEmail(email) {
      // eslint-disable-next-line
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    }
  }
};
</script>
<style lang="stylus" scoped>
$accessibleDanger = #E8002F

.help
  &.is-danger
    color $accessibleDanger

.notification
  &.is-danger
    background-color $accessibleDanger

  &.is-shrinked
    width 95%

.has-margin-left
  margin-left 2em
</style>
