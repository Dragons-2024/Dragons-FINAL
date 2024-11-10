import { Client } from "../core/interface/client";
import { Link } from "react-router-dom";

export function DetailClientTable({ cliente }: { cliente: Client }) {
  const HeaderClient: string[] = [
    "NIT",
    "Nombre",
    "Dirección",
    "Ciudad",
    "País",
    "Teléfono",
    "Correo",
    "Activo",
  ];

  return (
    <table className="mb-5 min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          {HeaderClient.map((theader) => (
            <th key={theader} className="py-3 px-6 text-center">
              {theader}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-center">{cliente.nit}</td>
          <td className="py-3 px-6 text-left">
            <Link className="hover:text-blue-500" to={"detalles-clientes"} state={cliente}>
              {cliente.nombre}
            </Link>
          </td>
          <td className="py-3 px-6 text-center">{cliente.direccion}</td>
          <td className="py-3 px-6 text-center">{cliente.ciudad}</td>
          <td className="py-3 px-6 text-center">{cliente.pais}</td>
          <td className="py-3 px-6 text-center">{cliente.telefono}</td>
          <td className="py-3 px-6 text-center">{cliente.correoCorporativo}</td>
          <td className="py-3 px-6 text-center">
            {cliente.activo ? (
              <span className="text-green-500 font-bold">Sí</span>
            ) : (
              <span className="text-red-500 font-bold">No</span>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}