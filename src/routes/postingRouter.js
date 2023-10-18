import express from 'express';
import postingController from '../controllers/postingController';

const postingRouter = express.Router();

postingRouter.post('/', postingController.createPosting);

export default postingRouter;
