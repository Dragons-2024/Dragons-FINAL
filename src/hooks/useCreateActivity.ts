import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity } from "../services/ActivityServices";
import { ActivityType } from "../core/interface/Activities";



export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (activity: ActivityType) => addActivity(activity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Activities"] });
    },
    onError: (error) => {
      console.error("Error al crear la actividad:", error);
    }
  });
};





