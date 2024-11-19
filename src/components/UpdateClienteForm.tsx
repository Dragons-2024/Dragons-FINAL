import { Client } from '../core/interface/client';
import { useUpdateCliente } from '../hooks/useUpdateCliente';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';

interface UpdateClienteFormProps {
  cliente: Client;
  onClose: () => void;
}

export function UpdateClienteForm({ onClose, cliente }: UpdateClienteFormProps) {
  const { mutate: updateCliente, isError } = useUpdateCliente();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Client>({
    defaultValues: cliente,
  });

  const onSubmit = (data: Client) => {
    const updatedCliente = { ...data, id: cliente.id };

    updateCliente(
      { id: cliente.id ?? 0, cliente: updatedCliente },
      {
        onSuccess: () => {
          reset();
          onClose();
        },
      }
    );
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <Dialog.Panel className="bg-white rounded-lg shadow-lg w-full max-w-xl md:max-w-3xl mx-auto p-6 z-50 overflow-auto max-h-screen">
        <Dialog.Title className="text-lg font-bold text-gray-700">
          Actualizar Cliente
        </Dialog.Title>
        {isError && (
          <p className="text-red-500 text-sm mt-2">
            Ocurrió un error al actualizar el cliente.
          </p>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 space-y-4"
        >
          <label className="block">
            <span className="text-gray-700">Nombre:</span>
            <input
              type="text"
              {...register('nombre', { required: 'El nombre es obligatorio' })}
              className={`border p-2 rounded w-full ${
                errors.nombre ? 'border-red-500' : ''
              }`}
            />
            {errors.nombre && (
              <span className="text-red-500 text-sm">{errors.nombre.message}</span>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Dirección:</span>
            <input
              type="text"
              {...register('direccion')}
              className="border p-2 rounded w-full"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Ciudad:</span>
            <input
              type="text"
              {...register('ciudad')}
              className="border p-2 rounded w-full"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">País:</span>
            <input
              type="text"
              {...register('pais')}
              className="border p-2 rounded w-full"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Teléfono:</span>
            <input
              type="text"
              {...register('telefono')}
              className="border p-2 rounded w-full"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Correo Corporativo:</span>
            <input
              type="email"
              {...register('correoCorporativo', {
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message: 'Formato de correo inválido',
                },
              })}
              className={`border p-2 rounded w-full ${
                errors.correoCorporativo ? 'border-red-500' : ''
              }`}
            />
            {errors.correoCorporativo && (
              <span className="text-red-500 text-sm">
                {errors.correoCorporativo.message}
              </span>
            )}
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white p-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}


// const UpdateClienteForm: React.FC<UpdateClienteFormProps> = ({ cliente, onClose }) => {
//   const [formData, setFormData] = useState(cliente);
//   const updateCliente = useUpdateCliente();
//   const queryClient = useQueryClient();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     updateCliente.mutate(
//       { id: formData.id, cliente: formData },
//       {
//         onSuccess: () => {
//           queryClient.invalidateQueries({ queryKey: ['clientes'] });
//           onClose(); 
//         },
//       }
//     );
//   };

//   return (
//     <div className="modal fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
//       <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md w-full">
//         <h2 className="text-xl font-bold mb-4">Actualizar Cliente</h2>

//         <label className="block mb-2">
//           Nombre:
//           <input
//             type="text"
//             name="nombre"
//             value={formData.nombre}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>

//         <label className="block mb-2">
//           Dirección:
//           <input
//             type="text"
//             name="direccion"
//             value={formData.direccion}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>

//         <label className="block mb-2">
//           Ciudad:
//           <input
//             type="text"
//             name="ciudad"
//             value={formData.ciudad}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>

//         <label className="block mb-2">
//           País:
//           <input
//             type="text"
//             name="pais"
//             value={formData.pais}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>

//         <label className="block mb-2">
//           Teléfono:
//           <input
//             type="text"
//             name="telefono"
//             value={formData.telefono}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>

//         <label className="block mb-2">
//           Correo Corporativo:
//           <input
//             type="email"
//             name="correoCorporativo"
//             value={formData.correoCorporativo}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>

//         <div className="flex justify-end mt-4">
//           <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded mr-2">
//             Cancelar
//           </button>
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Guardar Cambios
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateClienteForm;
