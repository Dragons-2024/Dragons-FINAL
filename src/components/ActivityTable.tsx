
import { useGetActivity } from "../hooks/useGetActivities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { ActivityType, TypeContactProps } from "../core/interface/ActivityInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { WindowDelete } from "./ActivityWindowDelete";




export function ActivityTable() {

    const { data: Activity, isLoading, error } = useGetActivity();
    const [activities, setActivities] = useState<ActivityType[]>();
    const [DeleteWindow,setDeleteWindow]=useState(false);

    function setCloseWindow(){
        setDeleteWindow(false);
      }

    useEffect(() => {
        if (Activity !== undefined) {
            setActivities(Activity);
        }
    }, [Activity]);

    const TableHeader:TypeContactProps[]=[
        {id:1,name:"Tipo de contacto"},
        {id:2,name:"Fecha de contacto"},
        {id:3,name:"Clientes Asociados"},
        {id:4,name:"Ejecutivo Comercial"},
        {id:5, name:"Descripcion"},
        {id:6,name:"Acciones"}
    ]


    if (isLoading) {
        return (<Loading />);
    }

    if (error) {
        return (<ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />);
    }

    if (activities !== undefined) {
        if (activities.length > 0) {
            return (
                <>
                <div className="w-full mx-auto my-10 text-center" style={{ overflowX: 'auto' }}>
                   <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {TableHeader.map((theader)=>(
                           <th key={theader.id} className="
                           py-3 px-6 text-center">{theader.name}</th> 
                        ))}
                        </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity)=>(
                                <tr key={activity.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-center">{activity.ContactType}</td>
                                    <td className="py-3 px-6 text-center">{`${activity.ContactDate}`}</td>
                                    
                                    <td className="py-3 px-6 text-center">
                                    <ul>
                                        {activity.Client.map((client)=>(
                                        
                                          <li key={client.name}>
                                            {client.name}
                                          </li>
                                        
                                    ))}
                                    </ul></td>
                                    <td className="py-3 px-6 text-center">{activity.ContactUser}</td>
                                    <td className="py-3 px-6 text-center">{activity.Description}</td>
                                    <td> <div className="flex gap-1 justify-center items-center">
                        <button className="text-xs p-1 bg-green-600 rounded-md text-white hover:bg-green-700">
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button onClick={()=>setDeleteWindow(true)}
                        className="text-xs p-1 bg-red-600 rounded-md text-white hover:bg-red-700">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    <WindowDelete open={DeleteWindow} setclose={setCloseWindow} activity={activity}/>
                    </td>
                                </tr>
                            ))}
                        </tbody>
                   </table>
                </div>
                
                </>
            );
        } else {
            return (
                <p className="text-3xl text-slate-900 text-center my-10">No hay actividades creadas</p>
            );
        }
    }

    return null;
}
