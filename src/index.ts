import express, { json } from 'express';
import cors from 'cors';
import { db } from './database';
import { routes } from './routes';

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cors());

routes(app);

app.listen(port, async () => {
  await db.sync();
  console.log(`Server is running on port: ${port}`);
});
