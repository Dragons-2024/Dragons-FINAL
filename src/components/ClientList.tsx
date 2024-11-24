import { ClientRow } from "../components/ClientRow";
import { useGetClientes } from "../hooks/useGetCliente";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";
import { Client } from "../core/interface/client";
import React from "react";


export const ClientList: React.FC = () => {
  
  const { data: clientesData, isLoading, error } = useGetClientes();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={`No se ha podido cargar la información. Error: ${error.message}`} />;
  }

  if (!clientesData || clientesData.length === 0) {
    return (
      <div className="p-4 font-poppins">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">No hay clientes registrados</h2>
      </div>
    );
  }

  return (
    <div className="p-4 font-poppins">
      
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
            {clientesData.map((cliente: Client) => (
              <ClientRow key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};