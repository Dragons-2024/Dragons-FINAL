import { axiosApi } from "../api/axios";
import { Oportunidad } from "../core/interface/opportunity";

export const getOpportunities = async (): Promise<Oportunidad[]> => {
    const response = await axiosApi.get("/opportunities");
    return response.data;
};

export const addOpportunity = async (opportunity: Oportunidad) => {
    try {
        const response = await axiosApi.post("/opportunities", opportunity);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error("Error al crear la oportunidad");
    }
};

export const deleteOpportunity = async (id: string): Promise<void> => {
    try {
        await axiosApi.delete(`/opportunities/${id}`);
    } catch (error) {
        console.log(error);
        throw new Error("Error al eliminar la oportunidad");
    }
};