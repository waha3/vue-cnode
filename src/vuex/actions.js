import * as api from '../api';
import * as types from './actionTypes.js';

export const getTopics = ({dispatch}) => {
  api.get('topics', data => dispatch({
    type: types.GETTOPICS,
    data
  }));
};
