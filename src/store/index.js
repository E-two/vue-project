import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import * as actions from './actions';
Vue.use(Vuex);

const state = {
  isLogin: false,
  userInfo: null,
  token: '',
  videosData: {}
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
