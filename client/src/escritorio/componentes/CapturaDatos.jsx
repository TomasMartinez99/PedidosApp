import React, { useState } from 'react';

export const CapturaDatos = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('csvFile', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:5173/cargar-csv', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Subir CSV</button>
    </div>
  )
}
