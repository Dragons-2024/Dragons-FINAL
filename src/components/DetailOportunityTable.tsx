import { Oportunidad } from "../core/interface/opportunity";

    

export function DetailOportunityTable({ oportunity }: { oportunity: Oportunidad }){

const OportunityObject:{title:string,value:string}[]=[
{title:"Nombre",value:oportunity.nombreNegocio},
{title:"Cliente",value:oportunity.cliente},
{title:"Linea de Negocio",value:oportunity.lineaNegocio},
{title:"Valor Estimado",value:`${oportunity.valorEstimado}`},
{title:"Fecha Estimada de Realizacion",value:oportunity.fechaEstimadaRealizacion},
{title:"Estado de la Oportunidad",value:oportunity.estadoOportunidad},
{title:"Descripcion",value:oportunity.descripcionOportunidad}

]
  return (
    <div className="p-4 font-poppins">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Detalles de la Oportunidad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         

         {OportunityObject.map((op)=>(
         <div key={op.title}>
            <p className="text-gray-600 font-semibold">{op.title}</p>
            <p className="text-gray-800">{op.value}</p>
          </div> 
         ))}
        </div>
      </div>
    </div>
  );
}
