import { BarChart } from "../components/BarChart";
import { ErrorMessage } from "../components/ErrorMessage";
import LinePieChart from "../components/LinePieChart";
import { Loading } from "../components/Loading";
import StatePieChart from "../components/StatePieChart";
import { useDashboardData } from "../hooks/useDashboardData";
import { Main } from "../layout/Main";
export function Dashboard() {
  const {
    clientesGraphData,
    estadoOportunidadesData,
    lineasDeNegocioData,
    loading,
    error,
  } = useDashboardData();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={`No se ha podido cargar la información. Error`} />;
  }
  return (
    <Main>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="space-y-4  md:space-y-0 mb-6 flex flex-col md:flex-row md:space-x-4 ">
          <div className="mx-auto md:w-1/2  p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl text-center font-bold mb-4">
              Valor Estimado vs Valor Ejecutado por Cliente
            </h2>
            <div className="border border-gray-400 p-2 rounded-md">
              <BarChart data={clientesGraphData} />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Nota: Este gráfico muestra la comparación entre el valor estimado
              y el valor ejecutado (cerrado) de las oportunidades por cada
              cliente.
            </p>
          </div>
          <div className="flex md:w-1/2 flex-col items-center mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">
              Distribución de Oportunidades por Estado
            </h2>
            <div className="md:w-1/2">
              <StatePieChart data={estadoOportunidadesData} />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Nota: Este gráfico muestra la distribución de las oportunidades
              según su estado (abierta o cerrada) para todos los clientes.
            </p>
          </div>
        </div>

        <div className="flex md:w-3/5 flex-col items-center mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            Distribución de Oportunidades por Línea de Negocio
          </h2>
          <div className="md:w-1/2">
            <LinePieChart data={lineasDeNegocioData} />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Nota: Este gráfico muestra la proporción de oportunidades para cada
            línea de negocio en el total de los clientes.
          </p>
        </div>
      </div>
    </Main>
  );
}
