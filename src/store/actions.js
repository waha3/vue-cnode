import * as types from './mutationTypes.js';
import { fetchTopicLists } from '../api/index.js';

export const getTopics = ({ commit }) => {
  fetchTopicLists(1, 'all')
    .then(topics => commit(types.GETTOPICS, 1, topics));
};
