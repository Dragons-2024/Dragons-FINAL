import React, { useState } from 'react';
import { Client } from '../core/interface/client';
import { useUpdateCliente } from '../hooks/useUpdateCliente';
import { useQueryClient } from '@tanstack/react-query';

interface UpdateClienteFormProps {
  cliente: Client;
  onClose: () => void;
}

const UpdateClienteForm: React.FC<UpdateClienteFormProps> = ({ cliente, onClose }) => {
  const [formData, setFormData] = useState(cliente);
  const updateCliente = useUpdateCliente();
  const queryClient = useQueryClient();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCliente.mutate(
      { id: formData.id, cliente: formData },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['clientes'] });
          onClose(); 
        },
      }
    );
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Actualizar Cliente</h2>

        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Dirección:
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Ciudad:
          <input
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          País:
          <input
            type="text"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Teléfono:
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Correo Corporativo:
          <input
            type="email"
            name="correoCorporativo"
            value={formData.correoCorporativo}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <div className="flex justify-end mt-4">
          <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded mr-2">
            Cancelar
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClienteForm;
