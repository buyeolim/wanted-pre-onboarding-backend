import app from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Server listening. Port: ${PORT}`);

app.listen(PORT, handleListening);
