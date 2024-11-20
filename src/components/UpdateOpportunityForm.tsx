import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useUpdateOpportunity } from "../hooks/useUpdateOpportunity";
import { Oportunidad } from "../core/interface/opportunity";

interface OpportunityFormProps {
  setClose: () => void;
  initialData: Oportunidad;
}

const EstadoOptions = ["Apertura", "En Estudio", "Orden de Compra", "Finalizada"];

export function OpportunityUpdateForm({ setClose, initialData }: OpportunityFormProps) {
  const { mutate: updateOpportunity, isError } = useUpdateOpportunity();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Oportunidad>({
    defaultValues: initialData,
  });

  const onSubmit = (data: Oportunidad) => {
    const updatedOpportunity = {
      ...data,
      id: initialData.id,
    };

    updateOpportunity({
      id: initialData.id ?? 0,
      opportunity: updatedOpportunity,
    });

    setClose();
    reset();
  };

  const getFilteredOptions = (estadoActual: string) => {
    switch (estadoActual) {
      case "Apertura":
        return ["Apertura", ...EstadoOptions.slice(1)];
      case "En Estudio":
        return ["En Estudio", ...EstadoOptions.slice(2)];
      case "Orden de Compra":
        return ["Orden de Compra", ...EstadoOptions.slice(3)];
      case "Finalizada":
        return ["Finalizada"];
      default:
        return EstadoOptions;
    }
  };

  const estadoActual = initialData.estadoOportunidad; 

  return (
    <Dialog
      open={true}
      onClose={setClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>

      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl md:max-w-3xl mx-auto p-6 z-50 overflow-auto max-h-screen">
        <Dialog.Title className="text-lg font-bold text-gray-700">
          Actualizar Oportunidad
        </Dialog.Title>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-4">
          {isError && (
            <p className="mx-auto p-2 text-red-500">
              Error al actualizar la oportunidad
            </p>
          )}

          <section className="flex flex-col gap-2">
            <label htmlFor="cliente" className="text-gray-700 font-semibold">
              Cliente:
            </label>
            <input
              id="cliente"
              value={initialData.cliente}
              readOnly
              className="bg-gray-100 border border-gray-300 rounded-md p-2 cursor-not-allowed"
            />
          </section>

          <section className="flex flex-col gap-2">
            <label htmlFor="nombreNegocio" className="text-gray-700 font-semibold">
              Nombre del Negocio:
            </label>
            <input
              type="text"
              id="nombreNegocio"
              {...register("nombreNegocio", { required: true })}
              className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
            {errors.nombreNegocio && <p className="text-red-500 text-xs">Campo obligatorio</p>}
          </section>

          <section className="flex flex-col gap-2">
            <label htmlFor="descripcionOportunidad" className="text-gray-700 font-semibold">
              Descripción Oportunidad:
            </label>
            <textarea
              id="descripcionOportunidad"
              {...register("descripcionOportunidad", { required: true })}
              className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              placeholder="Describe la oportunidad"
            ></textarea>
            {errors.descripcionOportunidad && <p className="text-red-500 text-xs">Campo obligatorio</p>}
          </section>

          <section className="flex flex-col gap-2">
            <label htmlFor="valorEstimado" className="text-gray-700 font-semibold">
              Valor Estimado:
            </label>
            <input
              type="number"
              id="valorEstimado"
              {...register("valorEstimado", { required: true })}
              className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
            {errors.valorEstimado && <p className="text-red-500 text-xs">Campo obligatorio</p>}
          </section>

          <section className="flex flex-col gap-2">
            <label htmlFor="estadoOportunidad" className="text-gray-700 font-semibold">
              Estado Actual: <span className="text-blue-600">{estadoActual}</span>
            </label>
            <select
               id="estadoOportunidad"
               {...register("estadoOportunidad", {
                 required: estadoActual !== "Finalizada", // Aquí verificamos si no es "Finalizada" para aplicar la validación
               })}
               className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
               disabled={estadoActual === "Finalizada"}
             >
              {estadoActual !== "Finalizada" &&
                getFilteredOptions(estadoActual).map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
            </select>
            {errors.estadoOportunidad && <p className="text-red-500 text-xs">Campo obligatorio</p>}
          </section>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={setClose}
              className="px-7 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-7 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
