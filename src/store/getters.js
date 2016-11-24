export const getterTopics = state => {
  const keys = Object.keys(state.home);
  const data = [];
  for (let i of keys) {
    data.push(...state.home[i]);
  }
  return data;
};
