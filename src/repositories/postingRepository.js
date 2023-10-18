import Posting from '../models/Posting';

class PostingRepository {
  async create({ company_id, position, reward, description, skills }) {
    try {
      const posting = await Posting.create({
        company_id,
        position,
        reward,
        description,
        skills,
      });

      return posting.dataValues;
    } catch (error) {
      throw error;
    }
  }
}

const postingRepository = new PostingRepository();

export default postingRepository;
