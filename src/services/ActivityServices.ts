import { axiosApi } from "../api/axios";
import { ActivityType } from "../core/interface/Activities";
// import { fetcher } from "../api/api";

export const addActivity = async (activity: ActivityType) => {
  try {
    const response = await axiosApi.post("/activities", activity);

    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear la actividad");
  }
};

export const getActivity = async ():Promise<ActivityType[]> => {
  const response= await axiosApi.get(`/activities`);
  return response.data;
};

export const deleteActivity= async (id: number): Promise<void> => {
  try {
      await axiosApi.delete(`/activities/${id}`);
  } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar la oportunidad");
  }
};