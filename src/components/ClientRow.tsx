import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UpdateClientForm from "./UpdateClienteForm"; // Formulario de actualización
import { Client } from "../core/interface/client";

interface ClientRowProps {
  cliente: Client;
  onToggleActive: (nit: string, activo: boolean) => void;
  onUpdate: (updatedClient: Client) => void;
}

export const ClientRow: React.FC<ClientRowProps> = ({ cliente, onToggleActive, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
          {cliente.activo ? <span className="text-green-500 font-bold">Sí</span> : <span className="text-red-500 font-bold">No</span>}
        </td>
        <td className="py-3 px-6 text-center flex justify-center space-x-2">
          <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
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

      {isModalOpen && (
        <UpdateClientForm
          cliente={cliente}
          onClose={closeModal}
          onUpdate={(updatedClient: Client) => {
            onUpdate(updatedClient);
            closeModal();
          }}
        />
      )}
    </>
  );
};
