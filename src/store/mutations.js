import { set } from 'vue';
import * as types from './mutationTypes.js';

export default {
  [types.GETTOPICS](state, payload) {
    set(state.home, payload.page, payload.topics.data);
  }
};
