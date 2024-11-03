import { useForm, useFieldArray } from "react-hook-form";
import { ClientArray } from "./ClientArray";

type FormValues = {
  ContactType:string;
  ContactDate:Date;
  Client: {
    name: string;
  }[];
  ContactUser:string;
  Description:string;
};

interface TypeContactProps {
  id: number;
  name: string;
}

const TypeContact: TypeContactProps[] = [
  { id: 1, name: "Llamada" },
  { id: 2, name: "Correo" },
  { id: 3, name: "Reunion Presencial" },
];

export function ActivityForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const { fields, append, remove } = useFieldArray({
    name: "Client",
    control,
  });

  return (
    <form className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md">
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
      </section>

      <section className="w-full">
      <div>
        <label
          htmlFor="ContactClient"
          className="block text-gray-700 font-semibold mb-2"
        >
          Clientes Asociados:
        </label>
        <button
          type="button"
          onClick={() => append({ name: "" })}
          className="mt-2 px-4 py-2 my-3 bg-blue-500 text-white rounded-md 
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Añadir Cliente
        </button>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mb-2">
            <input
              type="text" id="ContactClient"
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
        <label htmlFor="User" className="text-gray-700 font-semibold">
          Ejecutivo Comercial:
        </label>
        <input
          type="text"
          id="User"
          {...register("ContactUser",{required:true})}
          className="bg-blue-100 border border-gray-300 rounded-md p-2 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        />
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor="Description" className="text-gray-700 font-semibold">
          Descripción:
        </label>
        <textarea
          id="Description"
          {...register("Description")}
          placeholder="Describe las conclusiones del seguimiento"
          className="bg-blue-100 border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        ></textarea>
        <button className="px-7 py-2 border-2 bg-blue-700 hover:bg-blue-900 text-white 
        border-blue-700 hover:border-blue-900 rounded-lg my-2">Crear</button>
      </section>
    </form>
  );
}
