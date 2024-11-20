import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActivity } from "../services/ActivityServices";

export const useDeleteActivity = (Complete:()=>void,NotComplete:()=>void) => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: (id:number) => deleteActivity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Activities"] });
      Complete();
    },
    onError: (error) => {
      console.error("Error al eliminar la oportunidad:", error);
      NotComplete();
    },
  });
};