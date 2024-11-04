import { axiosApi } from "../api/axios";
import { ActivityType } from "../hooks/useCreateActivity";
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

export const getActivity = async () => {
  return axiosApi.get("/activities");
};