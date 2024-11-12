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
export const updateCliente = async (cliente: Client) => {
  try {
    // Imprime el objeto que se enviará al servidor
    console.log('Enviando al servidor:', cliente);

    const response = await axiosApi.put(`/clientes/${cliente.id}`, cliente); // Usamos el ID como identificador único
    return response.data; // Devuelve los datos actualizados del cliente
  } catch (error) {
    console.error("Error al actualizar el cliente:", error);
    throw new Error("Error al actualizar el cliente");
  }
};

export const createCliente = async (cliente: Omit<Client, 'id'>) => {
  try {
    const response = await axiosApi.post('/clientes', cliente);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error al crear el cliente');
  }
};