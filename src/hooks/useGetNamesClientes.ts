import { useQuery } from "@tanstack/react-query";
import { getClientes } from "../services/ClienteServices"; 

export const useGetNamesClientes = () => {
  return useQuery({
    queryKey: ["NamesClientes"], 
    queryFn: getClientes,  
    select: (data) => data.map((cliente: any) => cliente.nombre),
  });
};