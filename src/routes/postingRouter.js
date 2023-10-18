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

/*
 * 채용공고 삭제
 */
postingRouter.delete('/:postingId', postingController.deletePosting);

/*
 * 채용공고 목록 조회
 */
postingRouter.get('/', postingController.getAllPostings);

/*
 * 채용공고 상세 조회
 */
postingRouter.get('/:postingId', postingController.getPosting);

export default postingRouter;
