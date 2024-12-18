import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGetOpportunities } from "../hooks/useGetOpportunities";
import { useDeleteOpportunity } from "../hooks/useDeleteOpportunity";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { Oportunidad } from "../core/interface/opportunity";
import { Link } from "react-router-dom";
import { OpportunityUpdateForm } from "../components/UpdateOpportunityForm";
import { DeleteDialog } from "./DeleteDialog";

export const OpportunityList: React.FC = () => {
  const { data: oportunidades, isLoading, error } = useGetOpportunities();
  const { mutate: deleteOpportunity } = useDeleteOpportunity();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Oportunidad | null>(null);
  const [message, setMessage] = useState("");
  const [opportunities, setOpportunities] = useState<Oportunidad[]>([]);
  const [isEditing, setIsEditing] = useState(false); // Controla si estamos editando

  useEffect(() => {
    if (oportunidades) {
      setOpportunities(oportunidades);
    }
  }, [oportunidades]);

  const handleDeleteClick = (oportunidad: Oportunidad) => {
    setSelectedOpportunity(oportunidad);
    setMessage("");
    setIsDialogOpen(true);
  };

  const handleEditClick = (oportunidad: Oportunidad) => {
    setSelectedOpportunity(oportunidad);
    setIsEditing(true); // Muestra el formulario de edición
  };

  const handleConfirmDelete = () => {
    if (selectedOpportunity && selectedOpportunity.id) {
      deleteOpportunity(String(selectedOpportunity.id), {
        onSuccess: () => {
          setMessage("Oportunidad eliminada correctamente");
          setOpportunities(opportunities.filter((op: Oportunidad) => op.id !== selectedOpportunity.id));
          setIsDialogOpen(false);
        },
        onError: () => {
          setMessage("Error al eliminar la oportunidad");
        },
      });
    }
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  const handleCloseForm = () => {
    setIsEditing(false); 
    setSelectedOpportunity(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={`No se ha podido cargar la información. Error: ${error.message}`} />;
  }

  return (
    <div className="p-4 font-poppins">
      <div className="overflow-x-auto">
        {message && (
          <div className={`mb-4 ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
            {message}
          </div>
        )}
        {opportunities.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-center">Id</th>
                <th className="py-3 px-6 text-center">Cliente</th>
                <th className="py-3 px-6 text-center">Nombre Negocio</th>
                <th className="py-3 px-6 text-center">Línea de Negocio</th>
                <th className="py-3 px-6 text-center">Descripción</th>
                <th className="py-3 px-6 text-center">Valor Estimado</th>
                <th className="py-3 px-6 text-center">Fecha Estimada de Realización</th>
                <th className="py-3 px-6 text-center">Estado de Oportunidad</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {opportunities.map((oportunidad: Oportunidad) => (
                <tr key={oportunidad.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{oportunidad.id}</td>
                  <td className="py-3 px-6 text-left">{oportunidad.cliente}</td>
                  <td className="py-3 px-6 text-left">
                    <Link
                      state={oportunidad}
                      className="hover:text-blue-500"
                      to={`/detalles-oportunidad/${oportunidad.nombreNegocio}`}
                    >
                      {oportunidad.nombreNegocio}
                    </Link>
                  </td>
                  <td className="py-3 px-6 text-left">{oportunidad.lineaNegocio}</td>
                  <td className="py-3 px-6 text-left">{oportunidad.descripcionOportunidad}</td>
                  <td className="py-3 px-6 text-left">{oportunidad.valorEstimado}</td>
                  <td className="py-3 px-6 text-left">{oportunidad.fechaEstimadaRealizacion}</td>
                  <td className="py-3 px-6 text-left">{oportunidad.estadoOportunidad}</td>
                  <td className="flex gap-1 justify-center mt-2">
                    <button
                      onClick={() => handleEditClick(oportunidad)}
                      className="text-xs p-1 bg-green-600 rounded-md text-white hover:bg-green-700"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(oportunidad)}
                      className="text-xs p-1 bg-red-600 rounded-md text-white hover:bg-red-700"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-4">No hay oportunidades disponibles.</p>
        )}
      </div>

      {isEditing && selectedOpportunity && (
        <OpportunityUpdateForm setClose={handleCloseForm} initialData={selectedOpportunity} />
      )}

       <DeleteDialog object={"a oportunidad"} isDialogOpen={isDialogOpen} handleConfirmDelete={handleConfirmDelete} handleCancelDelete={handleCancelDelete}/>
    </div>
  );
};