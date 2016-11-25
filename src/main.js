import Vue from 'vue';
import router from './routes.js';
import store from './store/index.js';
import { sync } from 'vuex-router-sync';
import App from './App';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import { formatTime } from './util/filter.js';

Vue.use(MintUI);
Vue.filter('formatTime', formatTime);
sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  ...App
});
