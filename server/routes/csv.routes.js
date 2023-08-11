import { Router } from "express";
import multer from "multer";
import {
  cargarClientes
} from "../controllers/csv.controllers.js";

const upload = multer();
const router = Router();

// Ruta para manejar la carga del archivo CSV
router.post('/cargar-csv', cargarClientes);
  
export default router;