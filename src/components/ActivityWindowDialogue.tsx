
import { Oportunidad } from "../core/interface/opportunity";
import { ActivityForm } from "./ActivityForm";

interface WindowDialogueProps {
  oportunity:Oportunidad;
  open: boolean;
  setclose: () => void;
}

export function ActivityWindowDialogue({ oportunity,open, setclose }: WindowDialogueProps) {
  return (
    <div
      className={`fixed inset-0 flex flex-col  justify-center items-center z-10 font-poppins ${open ? "visible bg-black/20" : "invisible"
        }`}
    >
      <div className="bg-white rounded-xl shadow p-6 transition-all relative mx-4 overflow-y-auto max-h-[80vh]">
        <button onClick={setclose}>
          <i className="fas fa-times absolute right-2 top-2 text-gray-700"></i>
        </button>

        <h1 className="text-3xl text-center text-[#4A5FD9]">Crear Seguimiento</h1>
        <ActivityForm oportunity={oportunity} setclose={setclose} />
      </div>
    </div>
  );
}
