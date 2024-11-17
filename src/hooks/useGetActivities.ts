import { useQuery } from "@tanstack/react-query";
import {getActivity} from "../services/ActivityServices";
import { ActivityType } from "../core/interface/Activities";

export const useGetActivity = (NombreNegocio:string) => {
    return useQuery({
        queryKey: ["Activities",NombreNegocio],
        queryFn: getActivity,
        select:(data)=>data.filter((item:ActivityType)=>item["BusinessName"]===NombreNegocio)
    });
    }