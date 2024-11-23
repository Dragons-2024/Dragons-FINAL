import { useGetActivity } from "../hooks/useGetActivities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { ActivityType } from "../core/interface/Activities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Oportunidad } from "../core/interface/opportunity";
import { DeleteDialog } from "./DeleteDialog";
import { useDeleteActivity } from "../hooks/useDeleteActivity";
import { UpdateActivityForm } from "./UpdateActivityForm";

export function ActivityTable({ oportunity }: { oportunity: Oportunidad }) {
    const { data: Activities, isLoading, error } = useGetActivity(oportunity.nombreNegocio);
    const [FilterActivities, setActivities] = useState<ActivityType[]>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [ActivityId, setActivityId] = useState<number>(0);
    const [Message, setMessage] = useState<string>("");
    const [Load, setLoading] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingActivity, setEditingActivity] = useState<ActivityType | null>(null); // Estado para el seguimiento en edición

    const handleOpenEditForm = (activity: ActivityType) => {
        setEditingActivity(activity); // Guarda los datos del seguimiento seleccionado
        setIsEditing(true);
    };

    const handleCloseEditForm = () => {
        setEditingActivity(null); // Limpia los datos
        setIsEditing(false);
    };

    function complete() {
        setMessage("Cargando...");
        setLoading(true);
    }

    function errorDelete() {
        setMessage("Error al eliminar el seguimiento");
    }

    useEffect(() => {
        if (Message !== "" && Load === false) {
            setMessage("");
        }
    }, [Message]);

    const Delete = useDeleteActivity(complete, errorDelete);
    useEffect(() => {
        if (Activities !== undefined) {
            setActivities(Activities);
            setMessage("El seguimiento fue eliminado correctamente");
            setLoading(false);
        }
    }, [Activities]);

    const TableHeader: { id: number; name: string }[] = [
        { id: 1, name: "Id" },
        { id: 2, name: "Tipo de contacto" },
        { id: 3, name: "Fecha de contacto" },
        { id: 4, name: "Clientes asociados" },
        { id: 5, name: "Ejecutivo Comercial" },
        { id: 6, name: "Descripcion" },
        { id: 7, name: "Accion" },
    ];

    const handleConfirmDelete = () => {
        Delete.mutate(ActivityId);
        setIsDialogOpen(false);
    };

    const handleSetId = (id: number) => {
        setActivityId(id);
        setIsDialogOpen(true);
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

    if (FilterActivities !== undefined) {
        if (FilterActivities.length > 0) {
            return (
                <>
                    <section className="mx-auto p-4 mb-3">
                        <h2
                            className={`mb-4 ${
                                Message?.includes("Error") ? "text-red-500" : "text-green-500"
                            }`}
                        >
                            {Message}
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        {TableHeader.map((theader) => (
                                            <th key={theader.id} className="py-3 px-6 text-center">
                                                {theader.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {FilterActivities.map((activity) => (
                                        <tr key={activity.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-center">{activity.id}</td>
                                            <td className="py-3 px-6 text-center">{activity.ContactType}</td>
                                            <td className="py-3 px-6 text-center">{`${activity.ContactDate}`}</td>
                                            <td className="py-3 px-6 text-center">
                                                <ul>
                                                    {activity.Client.map((client) => (
                                                        <li key={client.name}>{client.name}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="py-3 px-6 text-center">{activity.ContactUser}</td>
                                            <td className="py-3 px-6 text-center">{activity.Description}</td>
                                            <td>
                                                <div className="flex gap-1 justify-center items-center">
                                                    <button
                                                        onClick={() => handleOpenEditForm(activity)} // Pasa el seguimiento a editar
                                                        className="text-xs p-1 bg-green-600 rounded-md text-white hover:bg-green-700"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleSetId(activity.id)}
                                                        className="text-xs p-1 bg-red-600 rounded-md text-white hover:bg-red-700"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                                <DeleteDialog
                                                    object={"el seguimiento"}
                                                    isDialogOpen={isDialogOpen}
                                                    handleConfirmDelete={handleConfirmDelete}
                                                    handleCancelDelete={handleCancelDelete}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {isEditing && editingActivity && (
                        <UpdateActivityForm initialData={editingActivity} setClose={handleCloseEditForm} />
                    )}
                </>
            );
        } else {
            return (
                <p className="text-3xl text-slate-900 text-center my-10">No hay seguimientos creados</p>
            );
        }
    }

    return null;
}
