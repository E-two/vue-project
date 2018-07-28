import * as http from '/http';

export const rqPlayVideo = params => {
  return http.post('/api/videos/play', params);
};
