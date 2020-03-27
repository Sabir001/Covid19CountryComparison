import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ totalRecovered, totalUnresolved, totalDeaths }) => {
  const data = {
    labels: ["Death", "Recovered", "Unresolved"],
    datasets: [
      {
        data: [totalDeaths, totalRecovered, totalUnresolved],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return <Doughnut data={data} />;
};

export default PieChart;
