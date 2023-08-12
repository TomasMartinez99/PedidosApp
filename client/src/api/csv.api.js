import axios from 'axios';

export const buscarCsvRequest = async () => {
    await axios.get("http://localhost:4001/cargar-csv");
}