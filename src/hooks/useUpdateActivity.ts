import {PatchActivity} from "../services/ActivityServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ActivityType } from "../core/interface/Activities";

export const useUpdateActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, activity }: { id: number; activity: ActivityType }) =>
      PatchActivity(id, activity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Activities"] });
    },
    onError: (error) => {
      console.error("Error al actualizar la actividad:", error);
    },
  });
};