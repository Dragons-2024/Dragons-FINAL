import { useForm, useFieldArray } from "react-hook-form";
import {  useCreateActivity } from "../hooks/useCreateActivity";
import { ActivityFormType, HeaderProps } from "../core/interface/Activities";





const TypeContact: HeaderProps[] = [
  { id: 1, name: "Llamada" },
  { id: 2, name: "Correo" },
  { id: 3, name: "Reunion Presencial" },
];

interface ActivityFormProps{
BusinessName:string;
setclose:()=>void;
}

export function ActivityForm({BusinessName,setclose}:ActivityFormProps) {
  const { mutate: CreateActivity,isError } = useCreateActivity();
  const { register,handleSubmit,control,reset,   formState: { errors },
  } = useForm<ActivityFormType>();

  const { fields, append, remove } = useFieldArray({
    name: "Client",
    control,
  });

  const onSubmit = (data: ActivityFormType) => {
    console.log("Activity Information: ", data);
    CreateActivity({
      ...data,
      id: Math.floor(Math.random() * 1000),
      BusinessName:BusinessName
    });
     setclose();
      reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
        {isError && (
          <p className="mx-auto p-2 text-red-500 ">
            Error al crear actividad
          </p>
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
          {...register("ContactDate",{required:true})}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
        {errors.ContactDate && (
              <p className="text-[#FF0000] text-xs mx-1">Campo obligatorio</p>
            )}
      </section>

      <section className="w-full">
      <div>
        <label
          htmlFor="Client"
          className="block text-gray-700 font-semibold mb-2"
        >
          Clientes Asociados:
        </label>
        <button
          type="button"
          onClick={() => append({ name: "" })}
          className="mt-2 px-4 py-2 my-3 bg-[#4A5FD9] text-white rounded-md 
          hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Añadir Cliente
        </button>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mb-2">
            <input
              type="text" id="Client"
              placeholder="Nombre del Cliente"
              {...register(`Client.${index}.name`, { required: true })}
              className={`flex-1 bg-blue-50 border ${
                errors.Client && errors.Client[index]?.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none hover:bg-red-200 rounded-full p-1"
              aria-label="Eliminar Cliente"
            >
              <img src="./src/assets/delete.svg" alt="Eliminar" />
            </button>
          </div>
        ))}
      </div>
    </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="User" className="text-gray-700 font-semibold ">
          Ejecutivo Comercial:
        </label>
        <input
          type="text"
          id="User"
          {...register("ContactUser",{required:true})}
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
        <button className="px-7 py-2 border-2 bg-[#4A5FD9] hover:bg-blue-900 text-white 
        border-[#4A5FD9] hover:border-blue-900 rounded-lg my-2">Guardar</button>
      </section>
    </form>
  );
}
