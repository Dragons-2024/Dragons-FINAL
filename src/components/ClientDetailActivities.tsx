import { useEffect, useState } from "react";
import { Oportunidad } from "../core/interface/opportunity";
import { ActivityType } from "../core/interface/Activities";
import { useGetActivity } from "../hooks/useGetActivities";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { HeaderProps } from "../core/interface/Activities";


export function ClientDetailActivities(oportunity: Oportunidad) {
    const { data: Activities, error, isLoading } = useGetActivity(oportunity.nombreNegocio);
    const [ActivitiesFilter, setActivities] = useState<ActivityType[]>([]);

    useEffect(() => {
        if (Activities !== undefined) {
            const FilterActivities = Activities;
            setActivities(FilterActivities);
        }
    }, [Activities, oportunity.nombreNegocio]);

    const TableHeader: HeaderProps[] = [
        { id: 1, name: "Tipo de contacto" },
        { id: 2, name: "Fecha de contacto" },
        { id: 3, name: "Clientes Asociados" },
        { id: 4, name: "Ejecutivo Comercial" },
        { id: 5, name: "Descripcion" },
    ];

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />;
    }

    return (
        <section className="mx-auto p-4 mb-3">
            <h1 className="text-4xl font-semibold mb-10 text-center text-blue-700">{oportunity.nombreNegocio}</h1>
            {ActivitiesFilter.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full mx-auto bg-white border border-gray-200 shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                                {TableHeader.map((theader) => (
                                    <th key={theader.id} className="py-3 px-6 text-center whitespace-nowrap">
                                        {theader.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ActivitiesFilter.map((activity) => (
                                <tr key={activity.id} className="border-b border-gray-200 hover:bg-gray-100 text-xs md:text-sm">
                                    <td className="py-3 px-6 text-center whitespace-nowrap">{activity.ContactType}</td>
                                    <td className="py-3 px-6 text-center whitespace-nowrap">{`${activity.ContactDate}`}</td>
                                    <td className="py-3 px-6 text-center whitespace-nowrap">
                                        <ul>
                                            {activity.Client.map((client) => (
                                                <li key={client.name}>{client.name}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="py-3 px-6 text-center whitespace-nowrap">{activity.ContactUser}</td>
                                    <td className="py-3 px-6 text-center whitespace-nowrap">{activity.Description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-3xl text-slate-900 text-center my-10">No hay tiene actividades de seguimientos</p>
            )}
        </section>
    );
}
