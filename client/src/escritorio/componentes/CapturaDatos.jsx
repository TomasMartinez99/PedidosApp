import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const CapturaDatos = () => {

  const csvUrl = 'https://drive.google.com/file/d/1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE/view?usp=drive_link';

  const handleCsvUpload = async () => {
    try {
      const response = await axios.get(csvUrl);
      const csvData = response.data;
      await axios.post('/cargar-csv', { csvData });
      console.log('Archivo CSV cargado y procesado exitosamente');
    } catch (error) {
      console.error('Error al cargar el archivo CSV:', error);
    }
  };

  return (
    <div>
      <button onClick={handleCsvUpload}>Cargar CSV</button>
    </div>
  )
}
