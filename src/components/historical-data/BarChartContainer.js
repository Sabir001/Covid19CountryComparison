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

  return (
    <BarChart
      options={{
        legend: {
          onClick: e => e.stopPropagation()
        }
      }}
      barData={barData}
      barLabel={barLabel}
    />
  );
};

export default BarChartContainer;
