import { Oportunidad } from "../core/interface/opportunity";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOpportunity } from "../services/OpportunityServices";

export const useCreateOpportunity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (opportunity: Oportunidad) => addOpportunity(opportunity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Opportunities"] });
    },
    onError: (error) => {
      console.error("Error al crear la oportunidad:", error);
    }
  });
};