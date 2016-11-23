import * as types from './mutationTypes.js';

export default {
  [types.GETTOPICS](state) {
    state.page = 2;
  }
};
