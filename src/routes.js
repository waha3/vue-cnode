import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// lazy loading
const Home = resolve => {
  require.ensure(['./container/home'], () => {
    resolve(require('./container/home'));
  });
};

const Detail = resolve => {
  require.ensure(['./container/detail'], () => {
    resolve(require('./container/detail'));
  });
};

const User = resolve => {
  require.ensure(['./container/user'], () => {
    resolve(require('./container/user'));
  });
};

const Login = resolve => {
  require.ensure(['./container/login'], () => {
    resolve(require('./container/login'));
  });
};

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/topic/:id', component: Detail },
    { path: '/user/:name', component: User },
    { path: '/login', component: Login }
  ]
});
