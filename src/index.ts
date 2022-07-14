import express, { json } from 'express';
import cors from 'cors';
import swagger from 'swagger-ui-express';
import { db } from './database';
import { routes } from './routes';
import swaggerDoc from '../swagger.json';

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cors());

app.use('/api/docs', swagger.serve, swagger.setup(swaggerDoc));

routes(app);

app.listen(port, async () => {
  await db.sync();
  console.log(`Server is running on port: ${port}`);
});
