import * as types from './actionTypes.js';

export default {
  [types.GETTOPICS](state, topics) {
    state.home.topics.push(topics);
  }
};
