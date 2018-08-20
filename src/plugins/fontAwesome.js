import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

fontawesome.config = {
  autoAddCss: false
};

fontawesome.library.add(solid, regular, brands);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
