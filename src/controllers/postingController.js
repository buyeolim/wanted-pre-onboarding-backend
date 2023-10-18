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

  async updatePosting(req, res) {
    try {
      const { postingId } = req.params;
      const { position, reward, description, skills } = req.body;
      if (!postingId) {
        throw new Error('잘못된 요청입니다.');
      }

      const dto = { postingId: +postingId };
      position && (dto.position = position);
      reward && (dto.reward = reward);
      description && (dto.description = description);
      skills && (dto.skills = skills);

      const updatedRowCount = await postingService.updatePosting(dto);
      if (!updatedRowCount) {
        throw new Error('채용공고 수정에 실패하였습니다.');
      }

      return res.status(204).json({ msg: '채공공고가 수정되었습니다.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: 'Bad Request', err: error.message });
    }
  }

  async deletePosting(req, res) {
    try {
      const { postingId } = req.params;
      if (!postingId) {
        throw new Error('잘못된 요청입니다.');
      }

      const deletedRowCount = await postingService.deletePosting({
        postingId: +postingId,
      });
      if (!deletedRowCount) {
        throw new Error('채용공고 삭제에 실패하였습니다.');
      }

      return res.status(204).json({ msg: '채공공고가 삭제되었습니다.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: 'Bad Request', err: error.message });
    }
  }

  async getAllPostings(req, res) {
    try {
      const postings = await postingService.getAllPostings();

      return res.status(200).json(postings);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: 'Bad Request', err: error.message });
    }
  }
}

const postingController = new PostingController();

export default postingController;
