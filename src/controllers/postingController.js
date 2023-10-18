import postingService from '../services/postingService';

class PostingController {
  async createPosting(req, res) {
    try {
      const { company, position, reward, description, skills } = req.body;

      if (!company || !position) {
        throw new Error('잘못된 요청입니다.');
      }

      const newPosting = await postingService.createPosting(req.body);
      if (!newPosting) {
        throw new Error('새 채용공고 등록에 실패하였습니다.');
      }

      return res.status(201).json({ msg: '채공공고가 등록되었습니다.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: 'Bad Request', err: error.message });
    }
  }
}

const postingController = new PostingController();

export default postingController;
