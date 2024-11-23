import React from 'react';
import { Client } from '../core/interface/client';
import { Loading } from './Loading';
import { ErrorMessage } from './ErrorMessage';

interface ClientListProps {
  clientes: Client[];
  loading: boolean;
  error: Error | null;
}

export function ClientList({ clientes, loading, error }: ClientListProps) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={`No se ha podido cargar la información. Error: ${error.message}`} />;
  }

  if (clientes.length === 0) {
    return (
      <div className="p-4 font-poppins">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">No hay clientes registrados</h2>
      </div>
    );
  }

  return (
    <div className="p-4 font-poppins" data-testid="client-list">
      <div className="overflow-x-auto">
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
              <tr key={cliente.id}>
                <td className="py-3 px-6 text-center">{cliente.nit}</td>
                <td className="py-3 px-6 text-center">{cliente.nombre}</td>
                <td className="py-3 px-6 text-center">{cliente.direccion}</td>
                <td className="py-3 px-6 text-center">{cliente.ciudad}</td>
                <td className="py-3 px-6 text-center">{cliente.pais}</td>
                <td className="py-3 px-6 text-center">{cliente.telefono}</td>
                <td className="py-3 px-6 text-center">{cliente.correoCorporativo}</td>
                <td className="py-3 px-6 text-center">{cliente.activo ? 'Sí' : 'No'}</td>
                <td className="py-3 px-6 text-center">Acciones</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}