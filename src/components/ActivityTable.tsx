import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetActivity } from "../hooks/useGetActivities";
import { ActivityFormType } from "./ActivityForm";
import { ActivityType } from "../hooks/useCreateActivity";

export function ActivityTable() {
    const { data: Activity, isLoading, isError } = useGetActivity();
    console.log(Activity);

    const columns: GridColDef[] = [
        { field: "ContactType", headerName: "Tipo de contacto", width: 180 },
        { field: "ContactDate", headerName: "Fecha de contacto", width: 150 },
        { 
            field: "Client", 
            headerName: "Clientes Asociados", 
            width: 200,
            renderCell: (params) => {
                // Verifica si params.value es un array y no es undefined
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
        { field: "ContactUser", headerName: "Ejecutivo Comercial", width: 150 },
        { field: "Description", headerName: "Descripción", width: 300 },
        {field:"Actions",headerName:"Acciones",width:180,
            renderCell:(params)=>{
                return(
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
        return <p>Está Cargando...</p>;
    }

    if (isError) {
        return <p>Error</p>;
    }

    if (Activity !== undefined) {
        return (
            <div className="w-11/12 mx-auto my-10 text-center">
                <DataGrid 
                    columns={columns} 
                    rows={Activity} 
                    sx={{
                        border: 'none',
                        '& .MuiDataGrid-cell': {
                            bgcolor: 'background.default', // Cambiar el fondo de las celdas
                            borderBottom: '1px solid rgba(224, 224, 224, 1)', // Personalizar borde de celdas
                        },
                        '& .MuiDataGrid-columnHeader': {
                            bgcolor: '#4A5FD9', // Cambiar el fondo de las cabeceras
                            color: 'white', // Cambiar el color del texto de las cabeceras
                        },
                        '& .MuiDataGrid-footerCell': {
                            borderTop: 'none', // Eliminar el borde superior del pie de página
                        },
                    }} 
                />
            </div>
        );
    }

    return null;
}
