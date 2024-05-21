import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { ChartTypeRegistry } from "chart.js";

ChartJS.register(...registerables);

export interface ChartProps {
  type: keyof ChartTypeRegistry;
  data: any;
  options: any;
}

const ReactChart = ({ type, data, options }: ChartProps) => {
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup chart instance on unmount
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return <Chart ref={chartRef} type={type} data={data} options={options} />;
};

export default ReactChart;
