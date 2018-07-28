import { USER_ISLOGIN, USER_USERINFO, USER_TOKEN } from '/constants';

export default {

  getVideosData (state) {
    return state.videosData;
  },

  getToken (state) {
    const tokeTemp = this.$cookies.get(USER_TOKEN);
    if (tokeTemp != null || undefined !== tokeTemp) state.token = tokeTemp;
    return state.token;
  },

  getIsLogin (state) {
    const isLoginTemp = this.$cookies.get(USER_ISLOGIN);
    if (isLoginTemp != null) state.isLogin = isLoginTemp;
    else state.isLogin = false;
    return state.isLogin;
  },

  getUserInfo (state) {
    const userInfoTemp = this.$cookies.get(USER_USERINFO);
    if (userInfoTemp != null) state.userInfo = userInfoTemp;
    return state.userInfo;
  }
};
