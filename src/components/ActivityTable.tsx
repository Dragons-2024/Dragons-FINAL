import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetActivity } from "../hooks/useGetActivities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { ActivityType } from "../hooks/useCreateActivity";

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
        { field: "ContactUser", headerName: "Ejecutivo Comercial", width: 150, headerAlign: 'center' },
        { field: "Description", headerName: "Descripción", width: 300, headerAlign: 'center' },
        { 
            field: "Actions", 
            headerName: "Acciones", 
            width: 180, 
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <div className="flex gap-1 justify-center mt-2">
                        <button className="text-xs p-1 bg-green-100 rounded-md 
                        text-white hover:bg-green-300"><img src="../src/assets/edit.svg" alt="Editar" /></button>
                        <button className="text-xs p-1 bg-red-100 rounded-md
                        text-white hover:bg-red-300"><img src="../src/assets/delete.svg" alt="Eliminar" /></button>
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
                <div className="w-11/12 mx-auto my-10 text-center" style={{ overflowX: 'auto' }}>
                    <DataGrid 
                        columns={columns} 
                        rows={activities} 
                        autoHeight
                        sx={{
                            border: 'none',
                            '& .MuiDataGrid-cell': {
                                bgcolor: 'background.default', 
                                borderBottom: '1px solid rgba(224, 224, 224, 1)', 
                                textAlign: 'center', // Centrar el contenido de las celdas
                            },
                            '& .MuiDataGrid-columnHeader': {
                                bgcolor: '#4A5FD9', 
                                color: 'white', 
                                textAlign: 'center', // Centrar el contenido de los encabezados
                                justifyContent: 'center', // Centrar los encabezados
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
