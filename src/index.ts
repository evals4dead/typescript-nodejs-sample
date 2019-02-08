import express from 'express';
import routes from './routes';

const app = express();

app.use('/api', routes);

app.listen(4000, () => {
  console.log('app is listening on port 4000');
});
