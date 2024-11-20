import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCliente } from "../services/ClienteServices";
import { Client } from "../core/interface/client";

export const useCreateClient = () => {
    const queryClient = useQueryClient();
    
    return useMutation<Client, Error, Omit<Client, 'id'>>({
      mutationFn: (client: Omit<Client, 'id'>) => createCliente(client),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["Clientes"] });
      },
      onError: (error: Error) => {
        console.error("Error al crear el cliente:", error.message);
      }
    });
  };