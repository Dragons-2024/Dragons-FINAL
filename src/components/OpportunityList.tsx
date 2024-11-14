import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGetOpportunities } from "../hooks/useGetOpportunities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { Oportunidad } from "../core/interface/opportunity";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dialog } from "@headlessui/react";

export const OpportunityList: React.FC = () => {
    const { data: oportunidades, isLoading, error } = useGetOpportunities();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedOpportunity, setSelectedOpportunity] = useState<Oportunidad | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [message, setMessage] = useState("");
    const [opportunities, setOpportunities] = useState<Oportunidad[]>([]);

    useEffect(() => {
        if (oportunidades) {
            setOpportunities(oportunidades);
        }
    }, [oportunidades]);

    const handleDeleteClick = (oportunidad: Oportunidad) => {
        setSelectedOpportunity(oportunidad);
        setMessage(""); // Limpia el mensaje antes de abrir el diálogo
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (selectedOpportunity) {
            setIsDeleting(true);
            try {
                await axios.delete(`https://dragons-final-api.onrender.com/opportunities/${selectedOpportunity.id}`);
                setMessage("Oportunidad eliminada correctamente");
                // Actualizar la lista de oportunidades después de eliminar
                setOpportunities(opportunities.filter((op: Oportunidad) => op.id !== selectedOpportunity.id));
            } catch (error) {
                console.error("Error deleting opportunity:", error);
                setMessage("Error al eliminar la oportunidad");
            } finally {
                setIsDeleting(false);
                setIsDialogOpen(false);
            }
        }
    };

    const handleCancelDelete = () => {
        setIsDialogOpen(false);
    };

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />;
    }
    if (opportunities && opportunities.length > 0) {
        return (
            <div className="p-4 font-poppins">
                <div className="overflow-x-auto">
                    {message && <div className={`mb-4 ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</div>}
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
                                <tr
                                    key={oportunidad.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {oportunidad.id}
                                    </td>
                                    <td className="py-3 px-6 text-left">{oportunidad.cliente}</td>
                                    <td className="py-3 px-6 text-left"><Link state={oportunidad} className="hover:text-blue-500" to={`/detalles-oportunidad/:${oportunidad.nombreNegocio}`}>{oportunidad.nombreNegocio}</Link></td>
                                    <td className="py-3 px-6 text-left">{oportunidad.lineaNegocio}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.descripcionOportunidad}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.valorEstimado}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.fechaEstimadaRealizacion}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.estadoOportunidad}</td>
                                    <td className="flex gap-1 justify-center mt-2">
                                        <button className="text-xs p-1 bg-green-600 rounded-md text-white hover:bg-green-700">
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
                </div>

                <Dialog
                    open={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-auto z-50">
                        <Dialog.Title className="text-lg font-bold">
                            Confirmar Eliminación
                        </Dialog.Title>
                        <Dialog.Description className="mt-2">
                            ¿Estás seguro de que deseas eliminar esta oportunidad?
                        </Dialog.Description>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={handleCancelDelete}
                                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Eliminando..." : "Aceptar"}
                            </button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    } else {
        return <p className="text-center mt-4">No hay oportunidades disponibles.</p>;
    }
};