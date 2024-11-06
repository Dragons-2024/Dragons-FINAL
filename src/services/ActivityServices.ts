import { axiosApi } from "../api/axios";
import { ActivityType } from "../core/interface/ActivityInterface";




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
  const response= await axiosApi.get("/activities");
  return response.data;
};

export const deleteActivity = async (activity: ActivityType) => {
  try{
    const response=await axiosApi.delete(`/activities${activity.id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Error al eliminar la actividad");
  }

};