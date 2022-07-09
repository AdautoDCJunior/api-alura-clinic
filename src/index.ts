import express, { json } from 'express';
import cors from 'cors';
import { db } from './database';

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cors());

app.listen(port, async () => {
  await db.sync();
  console.log(`Server is running on port: ${port}`);
});
