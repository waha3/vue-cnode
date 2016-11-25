import { set } from 'vue';
import * as types from '../mutationTypes.js';

let state = {};

const mutations = {
  [types.GETDETAIL](_state, payload) {
    Object.keys(payload.data).map(v => set(state, v, payload.data[v]));
  }
};

export default {
  state,
  mutations
};
