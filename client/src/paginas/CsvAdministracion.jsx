import React, { useState } from 'react'
import axios from 'axios'; // Para hacer solicitudes HTTP

export const CsvAdministracion = () => {

    const [csvData, setCsvData] = useState(null);

    const fetchCsvData = async () => {
      try {
        const response = await axios.get('/get-csv', {
          responseType: 'blob',
        });
  
        const csvFile = new Blob([response.data], { type: 'text/csv' });
        const csvUrl = URL.createObjectURL(csvFile);
  
        setCsvData(csvUrl);
      } catch (error) {
        console.error('Error al descargar el archivo CSV:', error);
      }
    };
  
    return (
      <div>
        <button onClick={fetchCsvData}>Descargar CSV</button>
        {csvData && <a href={csvData} download="data.csv">Descargar CSV</a>}
      </div>
    );
}
