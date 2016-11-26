export function getToken(name) {
  return localStorge.getItem(name);
}

export function setToken(token) {
  localStorge.setItem('accesstoken', token);
}

export function removeToken(name) {
  localStorge.removeItem(name);
}
