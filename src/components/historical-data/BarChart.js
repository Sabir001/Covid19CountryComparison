import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const BarChartContainer = ({ barData, barLabel, options }) => {
  const horizontalBarData = {
    labels: [...barLabel],
    datasets: [
      {
        label: "World Wide Confirmed Cases",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [...barData]
      }
    ]
  };
  return <HorizontalBar options={options} data={horizontalBarData} />;
};

export default BarChartContainer;
