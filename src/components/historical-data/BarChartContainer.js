import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { getWorldWideData } from "../../utils/helper";

const BarChartContainer = ({ chartData }) => {
  const [barData, setBarData] = useState([]);
  const [barLabel, setBarLabel] = useState([]);

  useEffect(() => {
    const { data, labels } = getWorldWideData(chartData, 10);
    setBarData(data);
    setBarLabel(labels);
  }, [chartData]);

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
  return (
    <BarChart
      options={{
        legend: {
          onClick: e => e.stopPropagation()
        }
      }}
      horizontalBarData={horizontalBarData}
    />
  );
};

export default BarChartContainer;
