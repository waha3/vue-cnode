import 'isomorphic-fetch';

const get = (path, query) => {
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

// const post = (path, query, data) => {
//   let url;
//   if (query) {
//     url = `https://cnodejs.org/api/v1/${path}?${query}`;
//   } else {
//     url = `https://cnodejs.org/api/v1/${path}`;
//   }
//
//   return fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/jso'
//     }
//   })
//     .then(res => res.json())
//     .catch(err => window.console.error(err));
// };

// 获取首页文章列表
export const fetchTopicLists = (page, tab) => {
  let query = `page=${page}&tab=${tab}`;
  return get('topics', query);
};

// 获取文章详情
export const fetchTopicDetail = (id) => {
  let path = `topic/${id}`;
  return get(path);
};

// 获取用户的信息
export const fetchUserInfo = (name) => {
  let path = `user/${name}`;
  return get(path);
};
