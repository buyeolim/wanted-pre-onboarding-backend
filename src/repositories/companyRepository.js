import Company from '../models/Company';

class CompanyRepository {
  async getId({ name }) {
    try {
      const company = await Company.findOne({
        name,
      });

      return company.dataValues.id;
    } catch (error) {
      throw error;
    }
  }
}

const companyRepository = new CompanyRepository();

export default companyRepository;
