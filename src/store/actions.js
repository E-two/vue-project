import { USER_LOGIN, USER_LOGINOUT, PLAY_VIDEO } from './mutation-types';

import { rqPlayVideo } from '/api/index.js';

const action = (api, params, commit, type, paramsRes) => {
  return new Promise((resolve, reject) => {
    api(params).then(res => {
      resolve({...res, ...paramsRes});
      commit(type, {...res, ...paramsRes});
    }).catch(error => {
      reject(error);
    });
  });
};

export const loginAction = ({ commit }, userInfo) => {
  commit(USER_LOGIN, userInfo);
};

export const loginOut = ({ commit }) => {
  commit(USER_LOGINOUT);
};

export const playVideo = ({ commit }, params) => {
  const { code, videoUrl } = params;
  const actionPro = action(rqPlayVideo, params, commit, PLAY_VIDEO, { code, videoUrl });
  return actionPro;
};
