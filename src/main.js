import Vue from 'vue';
import router from './routes.js';
import store from './vuex/store.js';
// import { sync } from 'vuex-router-sync';
import App from './App';

// sync(store, router);

new Vue({
  router,
  store,
  ...App
}).$mount('#app');
