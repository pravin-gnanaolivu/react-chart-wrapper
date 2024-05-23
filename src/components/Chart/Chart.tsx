import React from "react";
import { Chart, registerables } from "chart.js";
import { Chart as ChartJs } from "react-chartjs-2";
import { type ChartTypeRegistry, ChartData, ChartOptions } from "chart.js";

export interface ChartProps {
  type: keyof ChartTypeRegistry & string;
  data: ChartData;
  options: ChartOptions;
}

Chart.register(...registerables);

const ReactChart = ({ type, data, options }: ChartProps) => {
  return <ChartJs type={type} data={data} options={options} />;
};

export default ReactChart;
