import { useQuery } from "@tanstack/react-query";
import { getOpportunities } from "../services/OpportunityServices";

export const useGetOpportunities = () => {
    return useQuery({
        queryKey: ["Opportunities"],
        queryFn: getOpportunities,
    });
}