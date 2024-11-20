import { Dialog } from "@headlessui/react";

interface DeleteDialogProps{
    object:string,
    isDialogOpen:boolean,
    handleCancelDelete:()=>void,
    handleConfirmDelete:()=>void
}

export function DeleteDialog({object,isDialogOpen,handleCancelDelete,handleConfirmDelete}:DeleteDialogProps){
    return(
        <Dialog open={isDialogOpen} onClose={() => handleCancelDelete()} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>
        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-auto z-50">
          <Dialog.Title className="text-lg font-bold">Confirmar Eliminación</Dialog.Title>
          <Dialog.Description className="mt-2">
            {`¿Estás seguro de que deseas eliminar est${object}?`}
          </Dialog.Description>
          <div className="mt-4 flex justify-end space-x-2">
            <button onClick={handleCancelDelete} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
              Cancelar
            </button>
            <button onClick={handleConfirmDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">
              Aceptar
            </button>
          </div>
        </div>
      </Dialog>

    );
}