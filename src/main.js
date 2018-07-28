// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/';
import VueVideoPlayer from 'vue-video-player';
import VueCookies from 'vue-cookies';

import './antdesign';

import './assets/style/common.css';

Vue.config.productionTip = false;

Vue.use(VueVideoPlayer);
Vue.use(VueCookies);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
