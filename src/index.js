import 'dotenv/config';
import './db';
import Company from './models/Company';
import Posting from './models/Posting';
import User from './models/User';
import Application from './models/Application';
import app from './app';

// 1 : N (Company : Posting)
Company.hasMany(Posting, { foreignKey: 'company_id' });
Posting.belongsTo(Company, { foreignKey: 'company_id' });
// N : M (User: Posting)
User.belongsToMany(Posting, { through: Application });
Posting.belongsToMany(User, { through: Application });

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Server listening. Port: ${PORT}`);

app.listen(PORT, handleListening);
