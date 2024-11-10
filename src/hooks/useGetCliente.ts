// hooks/useGetClientes.ts
import { useQuery } from "@tanstack/react-query";
import { getClientes } from "../services/ClienteServices"; 

export const useGetClientes = () => {
  return useQuery({
    queryKey: ["Clientes"], 
    queryFn: getClientes,  
  });
};
