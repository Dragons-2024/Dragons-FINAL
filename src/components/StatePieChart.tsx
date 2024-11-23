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

interface StatePieChartProps {
  data: { labels: string[]; values: number[] };
  options?: ChartOptions<"pie">;
}

const StatePieChart: React.FC<StatePieChartProps> = ({ data, options }) => {
  const colors = ["#36A2EB", "#FF6384"];

  const chartData: ChartData<"pie", number[], string> = {
    labels: data.labels,
    datasets: [
      {
        label: "Estado de Oportunidades",
        data: data.values,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
};

export default StatePieChart;
