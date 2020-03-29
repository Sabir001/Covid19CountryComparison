import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const BarChartContainer = ({ horizontalBarData, options }) => (
  <HorizontalBar options={options} data={horizontalBarData} />
);

export default BarChartContainer;
