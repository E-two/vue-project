import axios from 'axios';
import qs from 'qs';
import store from '/store';
import router from '/router';

import { message as $message } from 'vue-antd-ui';

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export const api = '/apis';

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(api + url, { params }).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    });
  });
};

export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(api + url, qs.stringify(params)).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    });
  });
};

export function postForm (url, form) {
  const config = {
    headers: {'Content-Type': 'multipart/form-data'}
  };
  return new Promise((resolve, reject) => {
    axios.post(api + url, form, config).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    });
  });
};

// Before an asynchronous request, State before intercepting the request
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.token = `${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// After an asynchronous request
axios.interceptors.response.use(function (response) {
  const { code, message, result } = response.data;
  if (code !== 200) {
    $message.error(message);
  }
  return result;
}, function (err) {
  // Handling response errors
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = 'Request error(400)'; break;
      case 401:
        err.message = 'Unauthorized, please log in again(401)';
        store.dispatch('loginOut');
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        });
        break;
      case 403: err.message = 'Access denied(403)'; break;
      case 404: err.message = 'Request error(404)'; break;
      case 408: err.message = 'Request timed out(408)'; break;
      case 500: err.message = 'Server Error(500)'; break;
      case 501: err.message = 'Service not implemented(501)'; break;
      case 502: err.message = 'Network Error(502)'; break;
      case 503: err.message = 'Service is not available(503)'; break;
      case 504: err.message = 'Network timeout(504)'; break;
      case 505: err.message = 'HTTP version is not supported(505)'; break;
      default: err.message = `Connection error(${err.response.status})!`;
    }
  } else {
    err.message = 'Connection failure!';
  }
  $message.error(err.message);
  return Promise.reject(err);
});
