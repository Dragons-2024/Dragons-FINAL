
import { useQuery } from "@tanstack/react-query";
import { getOpportunities } from "../services/OpportunityServices";
import { Oportunidad } from "../core/interface/opportunity";

export const useGetOpportunitiesFiltered = (Client:string) => {
    return useQuery({
        queryKey: ["Opportunities",Client],
        queryFn: getOpportunities,
        select:(data)=>data.filter((item:Oportunidad)=>item["cliente"]===Client)
    });
}