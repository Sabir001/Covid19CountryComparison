import React from "react";
import { Bar } from "react-chartjs-2";
import { Col } from "reactstrap";

const BarChartContainer = ({
  barData,
  barLabel,
  options,
  datasetLabel,
  secondDataSetLabel,
  secondBarData
}) => {
  let dataset = [
    {
      label: datasetLabel,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [...barData]
    }
  ];
  if (secondBarData !== undefined && secondBarData.length > 0) {
    dataset = [
      ...dataset,
      {
        label: secondDataSetLabel,
        backgroundColor: "rgba(132,99,255,0.2)",
        borderColor: "rgba(132,99,255,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(132,99,255,0.4)",
        hoverBorderColor: "rgba(132,99,255,1)",
        data: [...secondBarData]
      }
    ];
  }
  const horizontalBarData = {
    labels: [...barLabel],
    datasets: [...dataset]
  };
  return (
    <Col md="12" xs="12">
      <Bar options={options} data={horizontalBarData} />
    </Col>
  );
};

export default BarChartContainer;
