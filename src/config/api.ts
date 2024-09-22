import axios from "axios";
import { ApiUrl } from "./constants";


const axiosInstance = axios.create({
  baseURL: ApiUrl, // URL base de tu API
  withCredentials: true, // Para enviar cookies en cada solicitud
  headers: {
    'Content-Type': 'application/json', // Tipo de contenido por defecto
  },
});

export const verifyToken = async (token: string) => {
  try {
    // Hacer la solicitud al backend para verificar el token
    const response = await axiosInstance.get('/validate-token',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    return response;
    // return response.data; // Devolver los datos de la respuesta
  } catch (error) {
    console.error('Error verifying token');
    throw error; // Lanzar el error para que pueda ser manejado en el componente
  }
};

export default axiosInstance;