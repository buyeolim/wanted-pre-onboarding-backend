import express from 'express';
import postingRouter from './postingRouter';

const rootRouter = express.Router();

rootRouter.use('/postings', postingRouter);

rootRouter.use('/', (req, res) => {
  console.log(req.body);
  try {
    return res.status(200).json({ msg: 'This is root api' });
  } catch (error) {
    console.log('🚫', error);
    return res
      .status(500)
      .json({ msg: 'Internal Server Error', err: error.message });
  }
});

export default rootRouter;
