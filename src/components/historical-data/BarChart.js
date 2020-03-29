import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { Col } from "reactstrap";

const BarChartContainer = ({ barData, barLabel, options, datasetLabel }) => {
  const horizontalBarData = {
    labels: [...barLabel],
    datasets: [
      {
        label: datasetLabel,
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
    <Col md="12" xs="12">
      <HorizontalBar options={options} data={horizontalBarData} />
    </Col>
  );
};

export default BarChartContainer;
