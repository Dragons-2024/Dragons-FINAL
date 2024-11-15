// hooks/useDeleteOpportunity.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOpportunity } from "../services/OpportunityServices";

export const useDeleteOpportunity = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: deleteOpportunity,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["opportunities"] });
        },
        onError: (error: any) => {
            console.error("Error deleting opportunity:", error);
        },
    });
};