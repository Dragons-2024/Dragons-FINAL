import React, { useState, useEffect } from "react";
import { Client } from "../core/interface/client";
import { useActualizarCliente } from "../hooks/useUpdateAllCliente";  // Asegúrate de que este hook esté bien configurado

interface UpdateClientFormProps {
  cliente: Client;
  onClose: () => void;
  onUpdate: (updatedClient: Client) => void;
}

const UpdateClientForm: React.FC<UpdateClientFormProps> = ({ cliente, onClose, onUpdate }) => {
  const [formData, setFormData] = useState<Client>(cliente);
  const { mutate,  isError } = useActualizarCliente();  // Usamos el hook para la mutación de actualización

  useEffect(() => {
    setFormData(cliente);  // Rellena el formulario con los datos del cliente cuando se abre el modal
  }, [cliente]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (updatedClient) => {
        onUpdate(updatedClient);  // Llama a la función onUpdate pasando los datos actualizados
        onClose();  // Cierra el modal después de la actualización
      },
      onError: (error) => {
        console.error("Error al actualizar el cliente", error);
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Actualizar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nit" className="block text-gray-700">NIT</label>
            <input
              type="text"
              id="nit"
              name="nit"
              value={formData.nit}
              onChange={handleChange}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="direccion" className="block text-gray-700">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ciudad" className="block text-gray-700">Ciudad</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pais" className="block text-gray-700">País</label>
            <input
              type="text"
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-700">Teléfono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correoCorporativo" className="block text-gray-700">Correo Corporativo</label>
            <input
              type="email"
              id="correoCorporativo"
              name="correoCorporativo"
              value={formData.correoCorporativo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose} // Cierra el modal sin hacer nada
              className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
           
            >
               Actualizar
            </button>
          </div>
        </form>
        {isError && <p className="text-red-500">Hubo un error al actualizar el cliente.</p>}
      </div>
    </div>
  );
};

export default UpdateClientForm;
