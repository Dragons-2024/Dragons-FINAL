import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Client } from "../core/interface/client";
import { useToggleClientStatus } from "../hooks/useToggleClientStatus";
import UpdateClienteForm from "./UpdateClienteForm";

interface ClientRowProps {
  cliente: Client;
}

export const ClientRow: React.FC<ClientRowProps> = ({ cliente }) => {
  const [isActive, setIsActive] = useState(cliente.activo);
  const [isEditing, setIsEditing] = useState(false);
  const toggleClientStatus = useToggleClientStatus();

  const handleToggleStatus = () => {
    toggleClientStatus.mutate(
      { id: cliente.id, activo: !isActive },
      {
        onSuccess: () => {
          setIsActive(!isActive); 
        }
      }
    );
  };

  const handleOpenEditForm = () => setIsEditing(true);
  const handleCloseEditForm = () => setIsEditing(false);

  return (
    <>
      <tr className={`border-b border-gray-200 hover:bg-gray-100 ${!isActive ? "text-red-500" : "text-black"}`}>
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
          {isActive ? (
            <span className="text-green-500 font-bold">Sí</span>
          ) : (
            <span className="text-red-500 font-bold">No</span>
          )}
        </td>
        <td className="py-3 px-6 text-center flex justify-center space-x-2">
          <button
            onClick={handleOpenEditForm}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <FontAwesomeIcon icon={faEdit} className="mr-1" />
            Actualizar
          </button>
          <button
            onClick={handleToggleStatus}
            className={`font-bold py-1 px-2 rounded inline-flex items-center ${
              isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
            } text-white`}
          >
            <FontAwesomeIcon icon={isActive ? faToggleOff : faToggleOn} className="mr-1" />
            {isActive ? "Inactivar" : "Activar"}
          </button>
        </td>
      </tr>

      {isEditing && (
        <UpdateClienteForm cliente={cliente} onClose={handleCloseEditForm} />
      )}
    </>
  );
};
