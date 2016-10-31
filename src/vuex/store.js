import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  home: {
    page: 1,
    data: []
  }
};

const actions = {};

const mutations = {};

const getter = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getter
});
