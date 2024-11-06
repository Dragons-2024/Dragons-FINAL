import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ActivityType } from "../core/interface/ActivityInterface";
import { deleteActivity } from "../services/ActivityServices";


export const useDeleteActivity = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (activity: ActivityType) => deleteActivity(activity),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["activities"] });
      },
      onError: (error) => {
        console.error("Error al eliminar la actividad:", error);
      }
    });
  };