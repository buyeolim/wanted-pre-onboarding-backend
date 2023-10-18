import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rootRouter from './routes/rootRouter';

const app = express();
const logger = morgan('dev');

// views 사용 설정
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

console.log('test');
app.use(logger);
app.use(cors()); // 외부 접속을 위한 CORS 설정(개발용)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', rootRouter);

export default app;
