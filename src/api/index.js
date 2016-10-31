import 'isomorphic-fetch';

export const get = (url, query) => {
  let _url;
  if (query) {
    _url = `https://cnodejs.org/api/v1/${url}?${query}`;
  } else {
    _url = `https://cnodejs.org/api/v1/${url}`;
  }

  return fetch(_url)
    .then(res => res.json())
    .catch(err => window.console.error(err));
};
