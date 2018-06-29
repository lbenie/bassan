<template lang="pug">
  section#top.hero
    .hero-body
      .container
        .columns
          .column.is-half.is-offset-one-quarter
            figure.image.is-square
              img(
                src="~/static/logo.png"
                alt="Bassan"
              )
            .is-uppercase.has-text-weight-bold.has-text-centered.has-negative-margin-top
              h1.wow.jackInTheBox.has-text-black.logo-h1(
                data-wow-delay="250ms"
              )
                | bassan
              p.wow.lightSpeedIn.logo-p(
                data-wow-delay="500ms"
              )
                | rédaction créative
</template>
<style lang="stylus" scoped>
.has-negative-margin-top {
  margin-top: -6em;
  position: relative;
  z-index: 1;
}

@media (max-width: 1024px) {
  .has-negative-margin-top {
    margin-top: -4.5em;
  }
}

@media (max-width: 767px) {
  .has-negative-margin-top {
    margin-top: -3.5em;
  }

  .logo-p {
    margin-top: -.5em;
    margin-bottom -4.5em
  }
}

@media (max-width: 480px) {
  .has-negative-margin-top {
    margin-top: -2em;
  }
}
</style>
