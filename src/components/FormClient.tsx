import { useState } from 'react';
import { Client } from '../core/interface/client';

export const FormClient: React.FC = () => {
  const [cliente, setCliente] = useState<Client>({
    id: 0, 
    nit: '',
    nombre: '',
    direccion: '',
    ciudad: '',
    pais: '',
    telefono: '',
    correoCorporativo: '',
    correoElectronico: '',
    fechaRegistro: '', 
    estado: '',
    activo: true,
  });
  
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCliente({
      ...cliente,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !cliente.nit ||
      !cliente.nombre ||
      !cliente.direccion ||
      !cliente.ciudad ||
      !cliente.pais ||
      !cliente.telefono ||
      !cliente.correoCorporativo
    ) {
      setErrorMessage('Por favor, complete todos los campos requeridos.');
      setSuccessMessage(null);
      return;
    }

    setSuccessMessage('Cliente creado exitosamente');
    setErrorMessage(null);

    setCliente({
      id: 0, 
      nit: '',
      nombre: '',
      direccion: '',
      ciudad: '',
      pais: '',
      telefono: '',
      correoCorporativo: '',
      correoElectronico: '',
      fechaRegistro: '', 
      estado: '',
      activo: true,
    });

    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md font-poppins">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Cliente</h2>
      
      {successMessage && (
        <div className="text-green-600 text-center mb-4 font-bold">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="text-red-600 text-center mb-4 font-bold">
          {errorMessage}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">NIT</label>
            <input
              type="text"
              name="nit"
              value={cliente.nit}
              onChange={handleChange}
              placeholder="Ingrese el NIT"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={cliente.nombre}
              onChange={handleChange}
              placeholder="Ingrese el nombre"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={cliente.direccion}
              onChange={handleChange}
              placeholder="Ingrese la dirección"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              value={cliente.ciudad}
              onChange={handleChange}
              placeholder="Ingrese la ciudad"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">País</label>
            <input
              type="text"
              name="pais"
              value={cliente.pais}
              onChange={handleChange}
              placeholder="Ingrese el país"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={cliente.telefono}
              onChange={handleChange}
              placeholder="Ingrese el teléfono"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700">Correo Corporativo</label>
            <input
              type="email"
              name="correoCorporativo"
              value={cliente.correoCorporativo}
              onChange={handleChange}
              placeholder="Ingrese el correo corporativo"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            name="activo"
            checked={cliente.activo}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700">Activo</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        >
          Crear Cliente
        </button>
      </form>
    </div>
  );
};
