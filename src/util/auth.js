export function getToken(name) {
  return localStorage.getItem(name);
}

export function setToken(token) {
  localStorage.setItem('accesstoken', token);
}

export function removeToken(name) {
  localStorage.removeItem(name);
}
