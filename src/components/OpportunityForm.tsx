import { useForm } from "react-hook-form";
import { useCreateOpportunity } from "../hooks/useCreateOpportunity";
import { Oportunidad } from "../core/interface/opportunity";

interface OpportunityFormProps {
  setClose: () => void;
}

const BusinessLineOptions = [
  { id: 1, name: "Outsourcing Recursos" },
  { id: 2, name: "Desarrollo Web" },
  { id: 3, name: "Desarrollo Mobile" },
  { id: 4, name: "Consultoría TI" },
];

const ClientOptions = [
  { id: 1, name: "Cliente A" },
  { id: 2, name: "Cliente B" },
  { id: 3, name: "Cliente C" },
];

export function OpportunityForm({ setClose }: OpportunityFormProps) {
  const { mutate: createOpportunity, isError } = useCreateOpportunity();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Oportunidad>();

  const onSubmit = (data: Oportunidad) => {
    const newOpportunity = {
      ...data,
      id: Math.floor(Math.random() * 1000),
      estadoOportunidad: "Apertura", // Asigna automáticamente "Apertura" al estado de la oportunidad
    };
    
    createOpportunity(newOpportunity);
    setClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
      {isError && (
        <p className="mx-auto p-2 text-red-500">
          Error al crear oportunidad
        </p>
      )}

      <section className="flex flex-col gap-2">
        <label htmlFor="cliente" className="text-gray-700 font-semibold">
          Cliente:
        </label>
        <select
          id="cliente"
          {...register("cliente", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        >
          {ClientOptions.map((client) => (
            <option key={client.id} value={client.name}>
              {client.name}
            </option>
          ))}
        </select>
        {errors.cliente && <p className="text-red-500 text-xs">Campo obligatorio</p>}
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
        <label htmlFor="lineaNegocio" className="text-gray-700 font-semibold">
          Línea de Negocio:
        </label>
        <select
          id="lineaNegocio"
          {...register("lineaNegocio", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        >
          {BusinessLineOptions.map((line) => (
            <option key={line.id} value={line.name}>
              {line.name}
            </option>
          ))}
        </select>
        {errors.lineaNegocio && <p className="text-red-500 text-xs">Campo obligatorio</p>}
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
        <label htmlFor="fechaEstimadaRealizacion" className="text-gray-700 font-semibold">
          Fecha Estimada de Realización:
        </label>
        <input
          type="date"
          id="fechaEstimadaRealizacion"
          {...register("fechaEstimadaRealizacion", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        {errors.fechaEstimadaRealizacion && <p className="text-red-500 text-xs">Campo obligatorio</p>}
      </section>

      <button type="submit" className="px-7 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none">
        Guardar
      </button>
    </form>
  );
}
