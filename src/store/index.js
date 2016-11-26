import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import * as getters from './getters.js';
import home from './modules/home.js';
import detail from './modules/detail.js';
import user from './modules/user.js';
import { createLogger } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    detail,
    user
  },
  plugins: createLogger
});
