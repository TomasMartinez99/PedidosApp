import React, { useState } from 'react';

export const CapturaDatos = () => {

  const [csvFile, setCsvFile] = useState(null);

  const handleDownloadClick = async () => {
    
    try {
      const response = await fetch('/download-csv'); // Llama al endpoint en el backend
      const blob = await response.blob();
      setCsvFile(blob); // Guarda el archivo en el estado del componente

      console.log(csvFile);
    } catch (error) {
      console.error('Error downloading CSV:', error);
    }

  };

  return (
    <div>
       <button onClick={handleDownloadClick}>Descargar y Guardar CSV</button>
        {csvFile && (
          <a href={URL.createObjectURL(csvFile)} download="data.csv">
            Descargar archivo CSV
          </a>
        )}
    </div>
  )
}
