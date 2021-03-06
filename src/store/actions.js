import * as types from './mutationTypes.js';
import { fetchTopicLists, fetchTopicDetail, fetchUserInfo, fetchLogin, createTopic } from '../api';

export const getTopics = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    fetchTopicLists(data.page, data.type)
      .then(topics => {
        commit(types.GETTOPICS, { page: data.page, topics });
        resolve();
      })
      .catch(err => {
        window.console.error(err);
        reject();
      });
  });
};

export const getTopicDetail = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    fetchTopicDetail(id)
    .then(data => {
      commit(types.GETDETAIL, data);
      resolve();
    })
    .catch(err => {
      window.console.error(err);
      reject(err);
    });
  });
};

export const getUserInfo = ({ commit }, name) => {
  return new Promise((resolve, reject) => {
    fetchUserInfo(name)
    .then(data => {
      resolve();
      commit(types.GETUSERINFO, data);
    })
    .catch(err => {
      reject(err);
      window.console.error(err);
    });
  });
};

export const postToken = ({ commit }, token) => {
  return new Promise((resolve, reject) => {
    fetchLogin(token)
    .then(data => {
      commit(types.POSTLOGIN, data);
      resolve(data);
    })
    .catch(err => {
      window.console.error(err);
      reject(err);
    });
  });
};

export const postTopics = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    createTopic(data)
    .then(res => {
      commit(types.POSTTOPICS);
      resolve(res);
    })
    .catch(err => {
      window.console.error(err);
      reject(err);
    });
  });
};
