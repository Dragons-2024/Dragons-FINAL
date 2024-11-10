import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { ClientRowProps } from "../core/clientRowProps";
import { Link } from "react-router-dom";

export const ClientRow: React.FC<ClientRowProps> = ({ cliente, onToggleActive, onUpdate }) => {
  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-100 ${!cliente.activo ? "text-red-500" : "text-black"}`}>
      <td className="py-3 px-6 text-left">{cliente.nit}</td>
      <td className="py-3 px-6 text-left">
        <Link className="hover:text-blue-500" to={`/detalles-clientes/${cliente.nit}`} state={cliente}>
          {cliente.nombre}
        </Link>
      </td>
      <td className="py-3 px-6 text-left">{cliente.direccion}</td>
      <td className="py-3 px-6 text-left">{cliente.ciudad}</td>
      <td className="py-3 px-6 text-left">{cliente.pais}</td>
      <td className="py-3 px-6 text-left">{cliente.telefono}</td>
      <td className="py-3 px-6 text-left">{cliente.correoCorporativo}</td>
      <td className="py-3 px-6 text-center">
        {cliente.activo ? (
          <span className="text-green-500 font-bold">Sí</span>
        ) : (
          <span className="text-red-500 font-bold">No</span>
        )}
      </td>
      <td className="py-3 px-6 text-center flex justify-center space-x-2">
        <button
          onClick={() => onUpdate(cliente.nit)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center"
          disabled={!cliente.activo}
        >
          <FontAwesomeIcon icon={faEdit} className="mr-1" />
          Actualizar
        </button>
        <button
          onClick={() => onToggleActive(cliente.nit, cliente.activo)}
          className={`font-bold py-1 px-2 rounded inline-flex items-center ${cliente.activo ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white`}
        >
          <FontAwesomeIcon icon={cliente.activo ? faToggleOff : faToggleOn} className="mr-1" />
          {cliente.activo ? "Inactivar" : "Activar"}
        </button>
      </td>
    </tr>
  );
};