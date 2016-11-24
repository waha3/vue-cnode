import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import mutations from './mutations.js';
import * as getters from './getters.js';

Vue.use(Vuex);

Vue.config.debug = true;

const state = {
  home: {}
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
