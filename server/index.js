import express from "express";
import cors from 'cors';
import { PORT } from "./config.js";

import csvRoutes from './routes/csv.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(csvRoutes);

app.listen(PORT);
console.log(`Server is running on ${PORT}`);