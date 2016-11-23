import * as types from './mutationTypes.js';

export default {
  [types.GETTOPICS](state, page, topics) {
    console.log(topics)
    state.home[page - 1] = {
      page: page,
      data: topics
    };
  }
};
