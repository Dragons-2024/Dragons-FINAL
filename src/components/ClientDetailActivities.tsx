import { useEffect, useState } from "react";
import { Oportunidad } from "../core/interface/opportunity";
import { ActivityType } from "../hooks/useCreateActivity";
import { useGetActivity } from "../hooks/useGetActivities";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { HeaderProps } from "../core/interface/Activities";


export function ClientDetailActivities(oportunity:Oportunidad) {

    const {data:Activities,error,isLoading}=useGetActivity();
    const [ActivitiesFilter, setActivities] = useState<ActivityType[]>([]);

    let FilterActivities: ActivityType[] = [];
    

    useEffect(()=>{
        if (Activities !== undefined) {
            console.log(oportunity.nombreNegocio);
            FilterActivities = Activities.filter(activity => activity.nombreNegocio === oportunity.nombreNegocio);
            if (FilterActivities !== undefined) {
                setActivities(FilterActivities);
            }
        }
    },[oportunity.nombreNegocio])
   

    
    const TableHeader:HeaderProps[]=[
        {id:1,name:"Tipo de contacto"},
        {id:2,name:"Fecha de contacto"},
        {id:3,name:"Clientes Asociados"},
        {id:4,name:"Ejecutivo Comercial"},
        {id:5, name:"Descripcion"},
    ]


    if (isLoading) {
        return (<Loading />);
    }

    if (error) {
        return (<ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />);
    }

    if (ActivitiesFilter !== undefined) {
        if (ActivitiesFilter.length > 0) {
            return (
                <>
                <section className="w-full mx-auto my-10 text-center">
                    <h1 className="text-4xl font-semibold mb-10 text-center text-blue-700">{oportunity.nombreNegocio}</h1>
                   <table className="min-w-full bg-white border border-gray-200 shadow-lg mx-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        {TableHeader.map((theader)=>(
                           <th key={theader.id} className="
                           py-3 px-6 text-center">{theader.name}</th> 
                        ))}
                        </tr>
                        </thead>
                        <tbody>
                            {ActivitiesFilter.map((activity)=>(
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
                                </tr>
                            ))}
                        </tbody>
                   </table>
                </section>
                
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