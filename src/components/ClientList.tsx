import { useState } from "react";
import { Cliente } from "../core/interface/client";
import { Link } from "react-router-dom";

export const ClientList: React.FC = () => {
  const [clientes] = useState<Cliente[]>([]);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
        <Link
          to="/crear-cliente"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
        >
          Crear Cliente
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">NIT</th>
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Dirección</th>
              <th className="py-3 px-6 text-left">Ciudad</th>
              <th className="py-3 px-6 text-left">País</th>
              <th className="py-3 px-6 text-left">Teléfono</th>
              <th className="py-3 px-6 text-left">Correo</th>
              <th className="py-3 px-6 text-center">Activo</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {clientes.map((cliente) => (
              <tr
                key={cliente.id}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
