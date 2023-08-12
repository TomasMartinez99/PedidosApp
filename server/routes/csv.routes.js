import { Router } from "express";
import {
  cargarClientes
} from "../controllers/csv.controllers.js";

const router = Router();

// Ruta para manejar la carga del archivo CSV
router.get('/cargar-csv', cargarClientes);
  
export default router;