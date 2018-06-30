<template lang="pug">
  div
    navbar(:data="navbar")
    project-list.has-8x-padding-top(:work="work", :clients="client")
</template>
<script>
import { client } from '~/plugins/contentful.js';
import Navbar from '~/components/Navbar.vue';
import ProjectList from '~/components/ProjectList.vue';

export default {
  components: {
    Navbar,
    ProjectList
  },
  async asyncData({ error }) {
    let result = {};

    const data = await Promise.all(
      ['navbar', 'client', 'work'].map(x =>
        client.getEntries({ content_type: x })
      )
    ).catch(e => error(e.message));

    data.forEach((element, index) => {
      if (data[index].items[0].sys.contentType.sys.id === 'client') {
        result[data[index].items[0].sys.contentType.sys.id] = data[index].items;
      } else {
        result[data[index].items[0].sys.contentType.sys.id] =
          data[index].items[0].fields;
      }
    });

    return result;
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
}

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
@media (min-width: 1281px) {
  .element-item {
    width: 18%;
  }
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/
@media (min-width: 1025px) and (max-width: 1280px) {
  .element-item {
    width: 18%;
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
  .element-item {
    width: 47%;
  }
}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .element-item {
    width: 47%;
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/
@media (min-width: 481px) and (max-width: 767px) {
  .element-item {
    width: 100%;
  }
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
  .element-item {
    width: 100%;
  }
}
</style>
