import { useEffect, useState } from "react";
import { Oportunidad } from "../core/interface/opportunity";
import { useGetOpportunities } from "../hooks/useGetOpportunities";
import { ClientDetailActivities } from "./ClientDetailActivities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";

interface ClientOportunityListProps {
    ClientName: string;
}

export function ClientOportunityList({ ClientName }: ClientOportunityListProps) {
    const { data: oportunities, error, isLoading } = useGetOpportunities();
    console.log(oportunities);
    let FilterOportunities: Oportunidad[] = [];
    if (oportunities !== undefined) {
        FilterOportunities = oportunities.filter(opportunity => opportunity.cliente === ClientName);
    }
    
    

    const [OportunityActivities,setOportunitiesActivities]=useState<Oportunidad>();
    
    const handleSubmit= (data:Oportunidad)=>{
      if(data===OportunityActivities){
         setOportunitiesActivities(undefined);
      }else{
        setOportunitiesActivities(data);
      }
    }

    useEffect(()=>{
    },[OportunityActivities]);

    const HeaderOportunity: string[] = [
        "id",
        "Cliente",
        "Nombre Negocio",
        "Linea de Negocio",
        "Descripcion",
        "Valor Estimado",
        "Fecha Estimada de Realizacion",
        "Estado de Oportunidad",
        "Seguimiento"
    ];

    if (isLoading) {
        return (<Loading />);
    }

    if (error) {
        return (<ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />);
    }

    return (
        <>
        <section className="p-4 overflow-x-auto mx-auto ">
            {FilterOportunities.length>0?(<table className="mb-5 min-w-full bg-white border border-gray-200 relative mx-auto shadow-lg">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                        {HeaderOportunity.map((theader) => (
                            <th
                                key={theader}
                                className="py-3 px-6 text-center "
                            >
                                {theader}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {FilterOportunities.map((oportunity) => (
                        <tr key={oportunity.id} className="border-b border-gray-200 hover:bg-gray-100 text-xs md:text-sm">
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.id}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.cliente}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.nombreNegocio}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.lineaNegocio}</td>
                            <td className="py-3 px-6 text-center">{oportunity.descripcionOportunidad}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.valorEstimado}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.fechaEstimadaRealizacion}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{oportunity.estadoOportunidad}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">
                                <button onClick={()=>handleSubmit(oportunity)} className="py-2 px-4 rounded-md my-auto bg-[#4A5FD9] text-white hover:bg-blue-700 text-xs md:text-sm">
                                    Seguimiento
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>):(
                <p className="text-3xl text-slate-900 text-center my-10">No tiene oportunidades</p>
            )}
            
        </section>
        {OportunityActivities&&(<ClientDetailActivities {...OportunityActivities}/>)}
        </>
    
    );
}
