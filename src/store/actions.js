import * as types from './mutationTypes.js';
import { fetchTopicLists } from '../api/index.js';

export const getTopics = ({ commit }) => {
  fetchTopicLists(1, 'all')
    .then(topics => commit(types.GETTOPICS, { page: 1, topics }));
};
