import { USER_LOGIN, USER_LOGINOUT, PLAY_VIDEO } from './mutation-types';

import { USER_ISLOGIN, USER_USERINFO, USER_TOKEN } from '/constants';

const LOGIN_TIME = 12 * 60 * 60; // 2 hours

export default {

  [PLAY_VIDEO] (state, res) {
    state.videosData = Object.keys(res).map(key => res[key]);
  },

  [USER_LOGIN] (state, token) {
    state.isLogin = true;
    state.token = token;
    this.$cookies.set(USER_ISLOGIN, true, LOGIN_TIME);
    this.$cookies.set(USER_TOKEN, token, LOGIN_TIME);
  },

  [USER_LOGINOUT] (state) {
    state.userInfo = null;
    state.isLogin = false;
    state.token = null;
    this.$cookies.remove(USER_ISLOGIN);
    this.$cookies.remove(USER_USERINFO);
    this.$cookies.remove(USER_TOKEN);
  }

};
