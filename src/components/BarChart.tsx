import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface ChartData {
  cliente: string;
  valorEstimado: number;
  valorEjecutado: number;
}

interface BarChartProps {
  data: ChartData[];
}

export const BarChart = ({ data }: BarChartProps) => {
  const chartData = {
    labels: data.map((d) => d.cliente),
    datasets: [
      {
        label: "Valor Estimado",
        data: data.map((d) => d.valorEstimado),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Valor Ejecutado",
        data: data.map((d) => d.valorEjecutado),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};
