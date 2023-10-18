import { Sequelize } from 'sequelize';

// 데이터베이스 설정
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
);

// 데이터베이스 연결
const connect2Database = async () => {
  try {
    await sequelize.authenticate();
    console.log('🟢 Connection has been established successfully.');
  } catch (error) {
    console.error('🔴 Unable to connect to the database:', error);
  }
};
connect2Database();

// 테이블 생성
sequelize
  .sync({ force: true }) // force | alter
  .then(() => {
    console.log('🟢 All models were synchronized successfully.');
  })
  .catch((error) => console.log('🔴 Database sync error:', error));
