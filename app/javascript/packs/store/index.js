import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import BookModule from './modules/bookModule';

const store = new Vuex.Store({
  modules: {
    BookModule
  }
})

export default store;
