import express, { Application } from 'express';
import { startCronJobs } from './services/startCronJobs';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

startCronJobs();
