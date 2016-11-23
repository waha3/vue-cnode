// import * as api from '../api';
import * as types from './mutationTypes.js';

export const getTopics = ({ commit }) => {
  commit(types.GETTOPICS);
};
