import { axiosApi } from "../api/axios";

export const getClientes = async () => {
  try {
    const response = await axiosApi.get('/clientes');
    return response.data; 
  } catch (error) {
    throw new Error('Error al obtener los clientes');
  }
};

export const updateClienteActivo = async (nit: string, activo: boolean) => {
  try {
    const response = await axiosApi.put(`/clientes/${nit}`, { activo });
    return response.data; 
  } catch (error) {
    console.error("Error al actualizar el estado del cliente:", error);
    console.log(nit);
    throw new Error('Error al actualizar el estado del cliente');
  }
};
