import axios from 'axios';

export const cargarClientes = async (req, res) => {

  /* https://drive.google.com/uc?export=download&id=1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE */
  /* const csvUrl = 'https://drive.google.com/file/d/1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE/view?usp=drive_link'; // Reemplaza con la URL real del archivo CSV */
  try {
    const response = await axios.get('https://drive.google.com/uc?export=download&id=1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE', {
      responseType: 'blob',
    });

    // Establecer las cabeceras adecuadas para permitir descargas desde el frontend
    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
    res.setHeader('Content-Type', 'text/csv');
    res.send(response.data);
  } catch (error) {
    console.error('Error al obtener el archivo CSV:', error);
    res.status(500).send('Error al obtener el archivo CSV');
  }
};
