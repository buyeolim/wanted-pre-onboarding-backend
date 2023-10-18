import postingRepository from '../repositories/postingRepository';
import companyRepository from '../repositories/companyRepository';

class PostingService {
  async createPosting({ company, position, reward, description, skills }) {
    try {
      const companyId = await companyRepository.getId(company);
      const newPosting = await postingRepository.create({
        company_id: companyId,
        position,
        reward,
        description,
        skills,
      });

      return newPosting;
    } catch (error) {}
  }

  async updatePosting(dto) {
    const { postingId, ...rest } = dto;
    try {
      const updatedRowCount = await postingRepository.update({
        id: postingId,
        ...rest,
      });

      return updatedRowCount;
    } catch (error) {}
  }
}

const postingService = new PostingService();

export default postingService;
