import { ActivityForm } from "./ActivityForm";

interface WindowDialogueProps {
  open: boolean;
  setclose: () => void;
}

export function WindowDialogue({ open, setclose }: WindowDialogueProps) {
  return (
    <div
      className={`fixed inset-0 flex flex-col  justify-center items-center z-10 ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="bg-white rounded-xl shadow p-6 transition-all relative  overflow-y-auto max-h-[80vh]">
        <button onClick={() => setclose()}>
          <img
            src="./src/assets/Close.svg"
            alt="close"
            className="absolute right-2 top-2"
          />
        </button>
        <h1 className="text-3xl text-center text-[#4A5FD9]">Crear Seguimiento</h1>
        <ActivityForm setclose={setclose}/>
      </div>
    </div>
  );
}
