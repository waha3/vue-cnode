import * as types from './mutationTypes.js';

export default {
  [types.GETTOPICS](state, payload) {
    state.home[payload.page - 1] = {
      page: payload.page,
      data: payload.topics.data
    };
  }
};
