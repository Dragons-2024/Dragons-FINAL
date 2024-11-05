import { useForm } from "react-hook-form";
import { useCreateOpportunity } from "../hooks/useCreateOpportunity"; // Asegúrate de tener un hook para manejar la creación de oportunidades
import { Oportunidad } from "../core/interface/opportunity";

interface OpportunityFormProps {
  setClose: () => void;
}

const StatusOptions = [
  { id: 1, name: "Pendiente" },
  { id: 2, name: "En Progreso" },
  { id: 3, name: "Completado" },
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
    console.log("Opportunity Information: ", data);
    createOpportunity({
      ...data,
      id: Math.floor(Math.random() * 1000),
    });
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
        <label htmlFor="nombre" className="text-gray-700 font-semibold">
          Nombre de la Oportunidad:
        </label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        {errors.nombre && <p className="text-red-500 text-xs">Campo obligatorio</p>}
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="descripcion" className="text-gray-700 font-semibold">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          {...register("descripcion", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          placeholder="Describe la oportunidad"
        ></textarea>
        {errors.descripcion && <p className="text-red-500 text-xs">Campo obligatorio</p>}
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="fechaCreacion" className="text-gray-700 font-semibold">
          Fecha de Creación:
        </label>
        <input
          type="date"
          id="fechaCreacion"
          {...register("fechaCreacion", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        {errors.fechaCreacion && <p className="text-red-500 text-xs">Campo obligatorio</p>}
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="estado" className="text-gray-700 font-semibold">
          Estado:
        </label>
        <select
          id="estado"
          {...register("estado", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        >
          {StatusOptions.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {errors.estado && <p className="text-red-500 text-xs">Campo obligatorio</p>}
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



      <button type="submit" className="px-7 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 focus:outline-none">
        Guardar
      </button>
    </form>
  );
}
