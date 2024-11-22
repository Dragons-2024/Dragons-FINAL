import { useQuery } from "@tanstack/react-query";
import { getClientes } from "../services/ClienteServices";
import { Client } from "../core/interface/client";

export const useGetClientOportunity = (name:string) => {
    return useQuery({
      queryKey: ["ClientesAsociados"], 
      queryFn: getClientes,  
      select: (data) => data.filter((cliente:Client)=>cliente["nombre"]===name),
    });
  };