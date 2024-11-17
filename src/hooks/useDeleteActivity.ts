import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity } from "../services/ActivityServices";

export const useDeleteActivity = (id:number) => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: () => deleteActivity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
    onError: (error) => {
      console.error("Error al eliminar la oportunidad:", error);
    },
  });
};