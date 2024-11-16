import { Oportunidad } from "../core/interface/opportunity";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOpportunity } from "../services/OpportunityServices";

export const useUpdateOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, opportunity }: { id: number | string; opportunity: Oportunidad }) =>
      updateOpportunity(id, opportunity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Opportunities"] });
    },
    onError: (error) => {
      console.error("Error al actualizar la oportunidad:", error);
    },
  });
};