// import { set } from 'vue';
import * as types from '../mutationTypes.js';

const state = {};

const mutations = {
  [types.POSTTOPICS](_state, data) {
    console.log(data);
  }
};

export default {
  state,
  mutations
};
