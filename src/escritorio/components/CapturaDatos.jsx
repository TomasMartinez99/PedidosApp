import React from 'react'
import axios from 'axios'

export const CapturaDatos = () => {

    const handleDownloadClick = () => {
        const csvUrl = 'https://drive.google.com/file/d/1XgrKrVwqG_vs1odKsOQds8L1JK47e4KE/view?usp=sharing'; // Reemplaza esta URL con la URL del archivo CSV en línea
        axios.get(csvUrl, { responseType: 'blob' })
            .then(response => {
            // Crea un objeto Blob con los datos del archivo CSV
            const csvBlob = new Blob([response.data], { type: 'text/csv' });

            // Genera un enlace temporal para descargar el archivo
            const csvUrl = URL.createObjectURL(csvBlob);

            // Crea un elemento <a> invisible y simula un clic para descargar el archivo
            const link = document.createElement('a');
            link.href = csvUrl;
            link.download = 'archivoApp.csv'; // Cambia "nombre_del_archivo.csv" al nombre deseado
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();

            // Limpia el enlace temporal y remueve el elemento <a> creado
            URL.revokeObjectURL(csvUrl);
              document.body.removeChild(link);
            })
            .catch(error => {
              console.error('Error al descargar el archivo CSV:', error);
              // Puedes agregar lógica adicional aquí para manejar errores
            });
    };
    

  return (
    <div>
        {/* <button onClick={handleDownloadClick}>Descargar CSV</button> */}
        <button
           
        >
            Captura de datos
        </button>
    </div>
  )
}
