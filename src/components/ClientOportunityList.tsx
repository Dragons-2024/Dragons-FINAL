import { Oportunidad } from "../core/interface/opportunity";
import { useGetOpportunities } from "../hooks/useGetOpportunities";
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

    console.log(FilterOportunities);
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
        <section className="p-4 overflow-x-auto mx-auto">
            <table className="mb-5 min-w-full bg-white border border-gray-200 relative mx-auto">
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
                    {FilterOportunities.map((opportunity) => (
                        <tr key={opportunity.id} className="border-b border-gray-200 hover:bg-gray-100 text-xs md:text-sm">
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.id}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.cliente}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.nombreNegocio}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.lineaNegocio}</td>
                            <td className="py-3 px-6 text-center">{opportunity.descripcionOportunidad}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.valorEstimado}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.fechaEstimadaRealizacion}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">{opportunity.estadoOportunidad}</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">
                                <button className="py-2 px-4 rounded-md my-auto bg-[#4A5FD9] text-white hover:bg-blue-700 text-xs md:text-sm">
                                    Seguimientos
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
