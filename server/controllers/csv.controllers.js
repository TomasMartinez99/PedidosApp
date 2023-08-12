/* import { pool } from "../db.js"; */
import axios from 'axios';


export const cargarClientes = async (req, res) => {

    /* const csvUrl = 'https://drive.google.com/file/d/1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE/view?usp=drive_link'; // Reemplaza con la URL real del archivo CSV */
    try {
        const csvUrl = 'https://drive.google.com/file/d/1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE/view?usp=drive_link'; // Reemplaza con la URL real del archivo CSV
        const response = await axios.get(csvUrl, { responseType: 'arraybuffer' });
    
        res.set({
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': 'attachment; filename=data.csv'
        });
    
        res.send(response.data);
      } catch (error) {
        console.error('Error downloading CSV:', error);
        res.status(500).send('Error');
      }
};
