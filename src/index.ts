import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cors());

app.listen(port, () => console.log(`Server is running on port: ${port}`));
