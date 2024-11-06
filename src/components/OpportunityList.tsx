import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGetOpportunities } from "../hooks/useGetOpportunities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { Oportunidad } from "../core/interface/opportunity";

export const OpportunityList: React.FC = () => {
    const { data: oportunidades, isLoading, error } = useGetOpportunities();

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />;
    }
    if (oportunidades && oportunidades.length > 0) {
        return (
            <div className="p-4 font-poppins">
                <div className="overflow-x-auto">
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
                            {oportunidades.map((oportunidad: Oportunidad) => (
                                <tr
                                    key={oportunidad.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {oportunidad.id}
                                    </td>
                                    <td className="py-3 px-6 text-left">{oportunidad.cliente}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.nombreNegocio}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.lineaNegocio}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.descripcionOportunidad}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.valorEstimado}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.fechaEstimadaRealizacion}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.estadoOportunidad}</td>
                                    <td className="flex gap-1 justify-center mt-2">
                                        <button className="text-xs p-1 bg-green-600 rounded-md text-white hover:bg-green-700">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-xs p-1 bg-red-600 rounded-md text-white hover:bg-red-700">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return <p className="text-center mt-4">No hay oportunidades disponibles.</p>;
    }
};
