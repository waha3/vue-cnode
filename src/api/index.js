import 'isomorphic-fetch';

export const get = (path, query) => {
  let url;
  if (query) {
    url = `https://cnodejs.org/api/v1/${path}?${query}`;
  } else {
    url = `https://cnodejs.org/api/v1/${path}`;
  }

  return fetch(url)
    .then(res => res.json())
    .catch(err => window.console.error(err));
};

// 获取首页文章列表
export const fetchTopicLists = (page, tab) => {
  let query = `page=${page}&tab=${tab}`;
  return get('topics', query);
};
