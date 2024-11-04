import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addActivity } from "../services/ActivityServices";

export type ActivityType = {
    id:number;
    ContactType:string;
    ContactDate:Date;
    Client: {
      name: string;
    }[];
    ContactUser:string;
    Description:string;
  };

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (activity: ActivityType) => addActivity(activity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
    onError: (error) => {
      console.error("Error al crear la actividad:", error);
    }
  });
};