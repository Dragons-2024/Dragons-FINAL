import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import { Client } from '../core/interface/client';

interface UpdateClienteFormProps {
  cliente: Client;
  onClose: () => void;
}

export const UpdateClienteForm: React.FC<UpdateClienteFormProps> = ({ cliente, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Client>({
    defaultValues: cliente
  });

  const onSubmit = (data: Client) => {
    // Lógica para actualizar el cliente
    console.log(data);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Panel className="bg-white rounded-lg shadow-lg w-full max-w-xl md:max-w-3xl mx-auto p-6 z-50 overflow-auto max-h-screen">
          <Dialog.Title className="text-lg font-bold text-gray-700">
            Actualizar Cliente
          </Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <label className="block">
              <span className="text-gray-700">Nombre:</span>
              <input
                {...register('nombre', { required: 'Este campo es obligatorio' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Dirección:</span>
              <input
                {...register('direccion', { required: 'Este campo es obligatorio' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.direccion && <span className="text-red-500 text-sm">{errors.direccion.message}</span>}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Ciudad:</span>
              <input
                {...register('ciudad', { required: 'Este campo es obligatorio' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.ciudad && <span className="text-red-500 text-sm">{errors.ciudad.message}</span>}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">País:</span>
              <input
                {...register('pais', { required: 'Este campo es obligatorio' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.pais && <span className="text-red-500 text-sm">{errors.pais.message}</span>}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Teléfono:</span>
              <input
                {...register('telefono', { required: 'Este campo es obligatorio' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono.message}</span>}
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Correo Corporativo:</span>
              <input
                {...register('correoCorporativo', { required: 'Este campo es obligatorio' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.correoCorporativo && <span className="text-red-500 text-sm">{errors.correoCorporativo.message}</span>}
            </label>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Actualizar
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};