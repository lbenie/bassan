<template lang="pug">
  section#top.hero
      .hero-body
        .container
          .columns
            .column.is-half.is-offset-one-quarter
              figure.image.is-square
                img(src="~/static/logo.png", alt="Bassan")
              .is-uppercase.has-text-weight-bold.has-text-centered.has-negative-margin-top
                h1.wow.jackInTheBox.has-text-black(data-wow-delay="250ms")
                  | bassan
                p.wow.lightSpeedIn.is-size-9(data-wow-delay="500ms")
                  | rédaction créative
</template>
<style lang="stylus" scoped>
.has-negative-margin-top {
  margin: -6rem;
  position: relative;
  z-index: 1;

  h1 {
    letter-spacing: 10px;
    font-size: 8rem;
  }

  p {
    margin: -2.5rem;
    position: relative;
    font-size: 2rem;
  }
}
</style>
