import { set } from 'vue';
import * as types from './mutationTypes.js';

export default {
  [types.GETTOPICS](state, payload) {
    set(state.home, page, payload.page);
    set(state.home, data, payload.data);
  }
};
