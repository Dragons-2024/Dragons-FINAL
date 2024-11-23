import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface LinePieChartProps {
  data: { labels: string[]; values: number[] };
  options?: ChartOptions<"pie">;
}

const LinePieChart: React.FC<LinePieChartProps> = ({ data, options }) => {
  const colors = ["#4CAF50", "#9C27B0", "#FF9800", "#FFC107"];

  const chartData: ChartData<"pie", number[], string> = {
    labels: data.labels,
    datasets: [
      {
        label: "Líneas de Negocio",
        data: data.values,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
};

export default LinePieChart;
