import axios, { AxiosRequestHeaders, AxiosResponse } from "axios";
import { ApiUrl } from "./constants";
import { logItemsData, members } from "./mockData";


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

export const getRecentsLogs = () => {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({ status: 200, data: logItemsData });
    }, 100)
  })
}

export const getMembers = (): Promise<AxiosResponse> => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        status: 200,
        data: members,
        statusText: 'OK',
        headers: {},
        config: {
          headers: {} as AxiosRequestHeaders
        }
      });
    }, 500)
  })
}

export default axiosInstance;