import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOpportunity } from "../services/OpportunityServices";

export const useDeleteOpportunity = () => {
  const queryClient = useQueryClient();
  
  return useMutation<void, Error, number>({
    mutationFn: (id: number) => deleteOpportunity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Opportunities"] });
    },
    onError: (error) => {
      console.error("Error al eliminar la oportunidad:", error);
    }
  });
};
