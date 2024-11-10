import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetActivity } from "../hooks/useGetActivities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { ActivityType } from "../core/interface/Activities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


export function ActivityTable() {
    const { data: Activity, isLoading, error } = useGetActivity();
    const [activities, setActivities] = useState<ActivityType[]>();

    useEffect(() => {
        if (Activity !== undefined) {
            setActivities(Activity);
        }
    }, [Activity]);

    const columns: GridColDef[] = [
        { field: "ContactType", headerName: "Tipo de contacto", width: 180, headerAlign: 'center' },
        { field: "ContactDate", headerName: "Fecha de contacto", width: 150, headerAlign: 'center' },
        { 
            field: "Client", 
            headerName: "Clientes Asociados", 
            width: 200,
            headerAlign: 'center',
            renderCell: (params) => {
                const clients = Array.isArray(params.value) ? params.value : [];
                return (
                    <div style={{ maxHeight: '50px', overflowY: 'auto' }}>
                        <ul style={{ padding: 0, margin: 0 }}>
                            {clients.map((client, index) => (
                                <li key={index} className="mx-auto">
                                    {client.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            },
        },
        { field: "ContactUser", headerName: "Ejecutivo Comercial", width: 170, headerAlign: 'center' },
        { field: "Description", headerName: "Descripción", width: 300, headerAlign: 'center' },
        { 
            field: "Actions", 
            headerName: "Acciones", 
            width: 180, 
            headerAlign: 'center',
            renderCell: () => {
                return (
                    <div className="flex gap-1 justify-center mt-2">
                        <button className="text-xs p-1 bg-green-600 rounded-md text-white hover:bg-green-700">
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="text-xs p-1 bg-red-600 rounded-md text-white hover:bg-red-700">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                );
            }            
        }
    ];

    if (isLoading) {
        return (<Loading />);
    }

    if (error) {
        return (<ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />);
    }

    if (activities !== undefined) {
        if (activities.length > 0) {
            return (
                <div className="w-full mx-auto my-10 text-center" style={{ overflowX: 'auto' }}>
                    <DataGrid 
                        columns={columns} 
                        rows={activities} 
                        sx={{
                            fontFamily:'poppins',
                            border: 'none',
                            '& .MuiDataGrid-cell': {
                                bgcolor: 'background.default', 
                                borderBottom: '1px solid rgba(224, 224, 224, 1)', 
                                textAlign: 'center', 
                            },
                            '& .MuiDataGrid-columnHeader': {
                                fontSize:'0.8em',
                                textTransform:'uppercase',
                                bgcolor: '#e5e7eb', 
                                color: '#4b5563', 
                                textAlign: 'center', 
                                justifyContent: 'center', 
                            },
                            '& .MuiDataGrid-footerCell': {
                                borderTop: 'none', 
                            },
                        }} 
                    />
                </div>
            );
        } else {
            return (
                <p className="text-3xl text-slate-900 text-center my-10">No hay actividades creadas</p>
            );
        }
    }

    return null;
}
