import express from 'express';
import postingController from '../controllers/postingController';

const postingRouter = express.Router();

/*
 * 채용공고 등록
 */
postingRouter.post('/', postingController.createPosting);

/*
 * 채용공고 수정
 */
postingRouter.put('/:postingId', postingController.updatePosting);

export default postingRouter;
