 export const getterTopics = state => {
  return Object.keys(state.home)
    .map(i => state.home[i])
    .reduce((pre, cur) => pre.concat(cur), []);
};
