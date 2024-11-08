import { Link } from "react-router-dom";
import { ClientRow } from "../components/ClientRow";
import { useGetClientes } from "../hooks/useGetCliente";  
import { useUpdateClienteStatus } from "../hooks/useUpdateCliente";
import { Loading } from "../components/Loading"; 
import { ErrorMessage } from "../components/ErrorMessage"; 
import { Cliente } from "../core/interface/client"; 

export const ClientList: React.FC = () => {
  const { data: clientes, isLoading, error } = useGetClientes();
  const { mutate: updateStatus } = useUpdateClienteStatus();

  const handleToggleActive = (clienteNit: string, clienteActivo: boolean) => {
    updateStatus({ nit: clienteNit, activo: !clienteActivo });
  };

  const handleUpdate = (clienteNit: string) => {
    console.log(`Actualizar cliente con NIT: ${clienteNit}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={`No se ha podido cargar la información. Error: ${error.message}`} />;
  }

  if (!clientes || clientes.length === 0) {
    return (
      <div className="p-4 font-poppins">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">No hay clientes registrados</h2>
      </div>
    );
  }

  return (
    <div className="p-4 font-poppins">
      <div className="flex justify-between my-8 pl-4">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2759]">Lista de Clientes</h2>
        <Link
          to="/crear-cliente"
          className="bg-[#4A5FD9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
        >
          Crear Cliente
        </Link>
      </div>
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
            {clientes.map((cliente: Cliente) => (
              <ClientRow
                key={cliente.nit}
                cliente={cliente}
                onToggleActive={handleToggleActive}
                onUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
