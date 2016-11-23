import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import mutations from './mutations.js';
import * as getters from './getters.js';

Vue.use(Vuex);

const state = {
  home: {
    page: 1,
    data: []
  }
};


export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
