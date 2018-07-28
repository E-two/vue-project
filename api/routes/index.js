import express from 'express';

import videos from './videos';

const router = express.Router();

router.use((req, res, next) => {
  return next();
});

router.use('/videos', videos);

export default router;
