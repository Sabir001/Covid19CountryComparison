import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  let labels = [];
  let data = [];
  if (
    chartData &&
    chartData.allRestApiHistories &&
    chartData.allRestApiHistories.edges &&
    chartData.allRestApiHistories.edges[0] &&
    chartData.allRestApiHistories.edges[0].node &&
    chartData.allRestApiHistories.edges[0].node.dateWiseTotal
  ) {
    for (
      let i = 0;
      i < 7 &&
      i < chartData.allRestApiHistories.edges[0].node.dateWiseTotal.length;
      i++
    ) {
      labels.push(
        chartData.allRestApiHistories.edges[0].node.dateWiseTotal[i].date
      );
      data.push(
        chartData.allRestApiHistories.edges[0].node.dateWiseTotal[i].confirmed
      );
    }
  }
  const barData = {
    labels: [...labels],
    datasets: [
      {
        label: "World Wide Confirmed Cases",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [...data]
      }
    ]
  };
  return <HorizontalBar data={barData} />;
};

export default BarChart;
