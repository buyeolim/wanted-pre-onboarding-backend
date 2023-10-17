import express from 'express';
import morgan from 'morgan';
import rootRouter from './routes/rootRouter';

const app = express();
const logger = morgan('dev');

// views 사용 설정
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

app.use(logger);
app.get('/', rootRouter);

export default app;
