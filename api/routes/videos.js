import express from 'express';

import { getFrames } from '../schema/videos';

const router = express.Router();

router.post('/play', (req, res) => {
  res.json({
    code: 200,
    message: 'success',
    result: getFrames(50)
  });
});

export default router;
