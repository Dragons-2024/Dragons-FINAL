import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOpportunity } from "../services/OpportunityServices";

export const useDeleteOpportunity = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number | string>({
    // Aceptamos ambos tipos de ID (number o string) para cubrir ambas implementaciones
    mutationFn: (id: number | string) => deleteOpportunity(id),
    onSuccess: () => {
      // Unificamos el nombre de la query a "opportunities" para consistencia
      queryClient.invalidateQueries({ queryKey: ["opportunities"] });
    },
    onError: (error) => {
      console.error("Error al eliminar la oportunidad:", error);
    },
  });
};

