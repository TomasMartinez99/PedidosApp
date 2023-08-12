import { Router } from "express";
import {
  cargarClientes
} from "../controllers/csv.controllers.js";

import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

// Ruta para manejar la carga del archivo CSV
router.get('/download-csv', cargarClientes);
  
export default router;