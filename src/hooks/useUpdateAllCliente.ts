import { useMutation } from "@tanstack/react-query";
import { updateCliente } from "../services/ClienteServices"; 
import { Client } from "../core/interface/client";

export const useActualizarCliente = () => {
  return useMutation({
    mutationFn: (cliente: Client) => updateCliente(cliente), // Se llama al servicio con el cliente completo
  });
};