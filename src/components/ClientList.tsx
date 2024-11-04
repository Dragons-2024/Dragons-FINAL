import { useState } from "react";
import { Cliente } from "../core/interface/client";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

export const ClientList: React.FC = () => {
  const [clientes] = useState<Cliente[]>([
    {
      nit: "123456789",
      nombre: "Empresa XYZ S.A.",
      direccion: "Calle Falsa 123",
      ciudad: "Ciudad Falsa",
      pais: "Falsolandia",
      telefono: "123-456-7890",
      correoCorporativo: "contacto@empresaxyz.com",
      activo: true,
    },
    {
      nit: "987654321",
      nombre: "Compañía ABC Ltda.",
      direccion: "Avenida Siempre Viva 742",
      ciudad: "Springfield",
      pais: "EE.UU.",
      telefono: "098-765-4321",
      correoCorporativo: "info@companiaabc.com",
      activo: false,
    },
  ]);

  const handleUpdate = (clienteNit: string) => {
    console.log(`Actualizar cliente con NIT: ${clienteNit}`);
  };

  const handleToggleActive = (clienteNit: string) => {
    console.log(`Inactivar/activar cliente con NIT: ${clienteNit}`);
  };

  return (
    <div className="p-4 font-poppins">
      <h1 className="text-center py-6 text-5xl text-[#1E2759]">Clientes</h1>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">Lista de Clientes</h2>
        <Link
          to="/crear-cliente"
          className="bg-[#4A5FD9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
        >
          Crear Cliente
        </Link>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">NIT</th>
              <th className="py-3 px-6 text-center">Nombre</th>
              <th className="py-3 px-6 text-center">Dirección</th>
              <th className="py-3 px-6 text-center">Ciudad</th>
              <th className="py-3 px-6 text-center">País</th>
              <th className="py-3 px-6 text-center">Teléfono</th>
              <th className="py-3 px-6 text-center">Correo</th>
              <th className="py-3 px-6 text-center">Activo</th>
              <th className="py-3 px-6 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {clientes.map((cliente) => (
              <tr
                key={cliente.nit}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {cliente.nit}
                </td>
                <td className="py-3 px-6 text-left">{cliente.nombre}</td>
                <td className="py-3 px-6 text-left">{cliente.direccion}</td>
                <td className="py-3 px-6 text-left">{cliente.ciudad}</td>
                <td className="py-3 px-6 text-left">{cliente.pais}</td>
                <td className="py-3 px-6 text-left">{cliente.telefono}</td>
                <td className="py-3 px-6 text-left">
                  {cliente.correoCorporativo}
                </td>
                <td className="py-3 px-6 text-center">
                  {cliente.activo ? (
                    <span className="text-green-500 font-bold">Sí</span>
                  ) : (
                    <span className="text-red-500 font-bold">No</span>
                  )}
                </td>
                <td className="py-3 px-6 text-center flex justify-center space-x-2">
                  <button
                    onClick={() => handleUpdate(cliente.nit)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center"
                  >
                    <FontAwesomeIcon icon={faEdit} className="mr-1" />
                    Actualizar
                  </button>
                  <button
                    onClick={() => handleToggleActive(cliente.nit)}
                    className={`font-bold py-1 px-2 rounded inline-flex items-center ${cliente.activo ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                      } text-white`}
                  >
                    <FontAwesomeIcon icon={cliente.activo ? faToggleOff : faToggleOn} className="mr-1" />
                    {cliente.activo ? "Inactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
