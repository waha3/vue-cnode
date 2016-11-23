// import * as api from '../api';
import * as types from './mutationTypes.js';
import { get } from '../api/index.js';

export const getTopics = ({ commit }) => {
  get('topics');
  commit(types.GETTOPICS);
};
