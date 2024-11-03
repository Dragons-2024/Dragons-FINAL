import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  client: {
    name: string;
  }[];
};

export function ClientArray() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      client: [{ name: "" }],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    name: "client",
    control,
  });

  return (
    <section className="w-full">
      {/* Clientes Asociados */}
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
              {...register(`client.${index}.name`, { required: true })}
              className={`flex-1 bg-blue-50 border ${
                errors.client && errors.client[index]?.name
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
  );
}
