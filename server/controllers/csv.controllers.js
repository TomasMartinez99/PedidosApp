/* import { pool } from "../db.js"; */
import axios from 'axios';
import fs from 'fs';
import path from 'path';


export const cargarClientes = async (req, res) => {

    try {
      const csvUrl = 'https://drive.google.com/file/d/1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE/view?usp=drive_link'; // Reemplaza con la URL real del archivo CSV
      const response = await axios.get(csvUrl, { responseType: 'arraybuffer' });
      
      const csvFileName = 'data.csv';
      const filePath = path.join(__dirname, './archivos-csv', csvFileName); // Ruta donde guardar el archivo
      
      fs.writeFileSync(filePath, response.data);
      
      res.sendStatus(200);
    } catch (error) {
      console.error('Error downloading CSV:', error);
      res.status(500).send('Error downloading CSV');
    }

};
