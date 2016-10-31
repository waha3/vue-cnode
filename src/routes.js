import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// lazy loading
const Home = resolve => {
  require.ensure(['./container/home'], () => {
    resolve(require('./container/home'));
  });
};

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home }
  ]
});
