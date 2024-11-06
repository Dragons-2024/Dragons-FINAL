import { ActivityType, WindowDeleteProps } from "../core/interface/ActivityInterface";
import { useDeleteActivity } from "../hooks/useDeleteActivity";



export function WindowDelete({ open, setclose,activity}: WindowDeleteProps) {

   const {mutate:DeleteActivity}=useDeleteActivity();

   function accept(activity:ActivityType){
    DeleteActivity(activity);
    setclose();
   }

    function cancel(){
        setclose();
    }

  return (
    <div
      className={`fixed inset-0 flex flex-col  justify-center items-center z-10 font-poppins ${open ? "visible bg-black/20" : "invisible"
        }`}
    >
      <div className="bg-white rounded-xl shadow p-6 transition-all relative  overflow-y-auto max-h-[80vh]">
        <p>¿Esta seguro que desea eliminar esta actividad?</p>
        <div className="flex justify-center gap-5 mt-3">
            <button onClick={()=>accept(activity)} 
            className="border p-2 rounded-md text-white bg-blue-600 hover:bg-blue-800">Aceptar</button>
            <button onClick={()=>cancel()} 
            className="border p-2 rounded-md text-white bg-red-600 hover:bg-red-800">Cancelar</button>
        </div>
      </div>
    </div>
  );
}