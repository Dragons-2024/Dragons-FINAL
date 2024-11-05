import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGetOpportunities } from "../hooks/useGetOpportunities";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
export const OpportunityList: React.FC = () => {
    const { data: oportunidades, isLoading, error } = useGetOpportunities();

    
        if (isLoading) {    
            return <Loading />;
        }
        if (error) {
            return <ErrorMessage message={`No se ha podido cargar la información. Error ${error.message}`} />;
        }
        if (oportunidades !== undefined) {
            if (oportunidades.length > 0) {
                return(
                <div className="p-4 font-poppins">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-center">Id</th>
                                <th className="py-3 px-6 text-center">Nombre</th>
                                <th className="py-3 px-6 text-center">Descripcion</th>
                                <th className="py-3 px-6 text-center">Fecha de Creacion</th>
                                <th className="py-3 px-6 text-center">Estado</th>
                                <th className="py-3 px-6 text-center">Valor Estimado</th>
                                <th className="py-3 px-6 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {oportunidades.map((oportunidad) => (
                                <tr
                                    key={oportunidad.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {oportunidad.id}
                                    </td>
                                    <td className="py-3 px-6 text-left">{oportunidad.nombre}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.descripcion}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.fechaCreacion}</td>
                                    <td className="py-3 px-6 text-left">{oportunidad.estado}</td>
                                    <td className="py-3 px-6 text-ce">{oportunidad.valorEstimado}</td>
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
            }
        }
    
};
