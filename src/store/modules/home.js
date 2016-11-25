import { set } from 'vue';
import * as types from '../mutationTypes.js';

const state = {};

const mutations = {
  [types.GETTOPICS](_state, payload) {
    set(state, payload.page, payload.topics.data);
  }
};

export default {
  state,
  mutations
};
