import { useForm } from "react-hook-form";
import { useCreateActivity } from "../hooks/useCreateActivity";
import { ActivityFormType, HeaderProps } from "../core/interface/Activities";
import { Oportunidad } from "../core/interface/opportunity";
import { useGetClientOportunity } from "../hooks/useGetClientOportunity";
import { Contacto } from "../core/interface/client";

const TypeContact: HeaderProps[] = [
  { id: 1, name: "Llamada" },
  { id: 2, name: "Correo" },
  { id: 3, name: "Reunion Presencial" },
];

interface ActivityFormProps {
  oportunity: Oportunidad;
  setclose: () => void;
}

export function ActivityForm({ oportunity, setclose }: ActivityFormProps) {
  const { mutate: CreateActivity, isError } = useCreateActivity();
  const {data:ClientOportunity}=useGetClientOportunity(oportunity.cliente);
  let ContactNames:{name:string}[]=[];
if(ClientOportunity && ClientOportunity.length > 0 && ClientOportunity[0].contactos){
 ContactNames=ClientOportunity[0].contactos?.map((contacts:Contacto)=>({name:contacts.nombre}))
}

console.log(ContactNames);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ActivityFormType>();


  const onSubmit = (data: ActivityFormType) => {
    console.log("Activity Information: ", data);
    CreateActivity({
      id: Math.floor(Math.random() * 1000),
      BusinessName: oportunity.nombreNegocio,
      ...data,
      Client:ContactNames
    });
    setclose();
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md"
    >
      {isError && (
        <p className="mx-auto p-2 text-red-500 ">Error al crear actividad</p>
      )}

      <section className="flex flex-col gap-2">
        <label htmlFor="ContactType" className="text-gray-700 font-semibold">
          Tipo de Contacto:
        </label>
        <select
          id="ContactType"
          {...register("ContactType")}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        >
          {TypeContact.map((type) => (
            <option key={type.id} value={type.name} className="bg-blue-100">
              {type.name}
            </option>
          ))}
        </select>
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="ContactDate" className="text-gray-700 font-semibold">
          Fecha de Contacto:
        </label>
        <input
          type="date"
          id="ContactDate"
          {...register("ContactDate", { required: true })}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        {errors.ContactDate && (
          <p className="text-[#FF0000] text-xs mx-1">Campo obligatorio</p>
        )}
      </section>
          

      <section className="flex flex-col gap-2">
        <label htmlFor="User" className="text-gray-700 font-semibold ">
          Ejecutivo Comercial:
        </label>
        <input
          type="text"
          id="User"
          {...register("ContactUser", { required: true })}
          className="bg-blue-100 border border-gray-300 focus:outline-none rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        {errors.ContactUser && (
          <p className="text-[#FF0000] text-xs mx-1">Campo obligatorio</p>
        )}
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="Description" className="text-gray-700 font-semibold">
          Descripción:
        </label>
        <textarea
          id="Description"
          {...register("Description")}
          placeholder="Describe las conclusiones del seguimiento"
          className=" bg-blue-100 border border-gray-300 rounded-md focus:outline-none p-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        ></textarea>
        <button
          className="px-7 py-2 border-2 bg-[#4A5FD9] hover:bg-blue-900 text-white 
        border-[#4A5FD9] hover:border-blue-900 rounded-lg my-2"
        >
          Guardar
        </button>
      </section>
    </form>
  );
}
