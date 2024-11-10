import { useMutation } from "@tanstack/react-query";
import { updateClienteActivo } from "../services/ClienteServices";

export const useUpdateClienteStatus = () => {
  return useMutation({
    mutationFn: (params: { nit: string; activo: boolean }) => 
      updateClienteActivo(params.nit, params.activo),
  });
};
