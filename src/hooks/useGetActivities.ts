import { useQuery } from "@tanstack/react-query";
import {getActivity} from "../services/ActivityServices";

export const useGetActivity = () => {
    return useQuery({
        queryKey: ["Activities"],
        queryFn: getActivity,
    });
    }