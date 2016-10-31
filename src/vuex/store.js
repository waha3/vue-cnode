import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  home: {
    page: 1,
    data: []
  }
};

export default new Vuex.Store({ state });
