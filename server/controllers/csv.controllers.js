import { pool } from "../db.js";

export const cargarClientes = async (req, res) => {

  const { csvData } = req.body;

  // Procesar csvData y realizar inserciones en la base de datos
  const rows = csvData.split('\n');
  for (const row of rows) {
    const [CLIENTE, NOMBRE, FANTASIA, LOCALIDAD, PROVINCIA, EMAIL, CUIT, TIPO, POSTAL, ZONA, ACTIVIDAD, VENDEDOR, LIMITE, LISTA, PERSONAL, USUARIO, SALDO] = row.split(',');
    
    const query = `INSERT INTO clientes (CLIENTE, NOMBRE, FANTASIA, LOCALIDAD, PROVINCIA, EMAIL, CUIT, TIPO, POSTAL, ZONA, ACTIVIDAD, VENDEDOR, LIMITE, LISTA, PERSONAL, USUARIO, SALDO) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    await pool.execute(query, [CLIENTE, NOMBRE, FANTASIA, LOCALIDAD, PROVINCIA, EMAIL, CUIT, TIPO, POSTAL, ZONA, ACTIVIDAD, VENDEDOR, LIMITE, LISTA, PERSONAL, USUARIO, SALDO]);
  }

  pool.end();

  res.status(200).send('Archivo CSV cargado y procesado exitosamente');
};
