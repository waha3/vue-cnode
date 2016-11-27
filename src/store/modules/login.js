import * as types from '../mutationTypes.js';
import { set } from 'vue';

const state = {};

const mutations = {
  [types.POSTLOGIN](_state, data) {
    Object.keys(data).map(k => set(state, k, data[k]));
  }
};

export default {
  state,
  mutations
};
