import { axiosApi } from "../api/axios";
import { Client } from "../core/interface/client";
export const getClientes = async () => {
  try {
    const response = await axiosApi.get('/clientes');
    return response.data; 
  } catch (error) {
    throw new Error('Error al obtener los clientes');
  }
};

export const patchClient = async (id: number, cliente: Client) => {
  try {
    const response = await axiosApi.patch(`/clientes/${id}`, cliente);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al actualizar el cliente');
  }
}

export const createCliente = async (cliente: Omit<Client, 'id'>) => {
  try {
    const response = await axiosApi.post('/clientes', cliente);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al crear el cliente');
  }
};
export const toggleClientStatus = async (id: number, activo: boolean) => {
  try {
    const response = await axiosApi.patch(`/clientes/${id}`, { activo });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al cambiar el estado del cliente');
  }
};