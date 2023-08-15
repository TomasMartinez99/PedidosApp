import { Router } from "express";
import cors from 'cors';
import { cargarClientes } from "../controllers/csv.controllers.js";

const router = Router();

router.use(cors()); // Configura CORS para permitir todas las solicitudes (en producción, configura las opciones de CORS según tus necesidades)

// Ruta para manejar la carga del archivo CSV
router.get('/get-csv', cargarClientes);

export default router;