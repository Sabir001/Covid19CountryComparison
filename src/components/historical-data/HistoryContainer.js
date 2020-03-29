import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Row } from "reactstrap";
import BarChartContainer from "./BarChartContainer";

const HistoryContainer = () => {
  const chartData = useStaticQuery(graphql`
    query {
      allRestApiHistories {
        edges {
          node {
            countries
            result {
              id
              country
              histories {
                confirmed
                date
                deaths
                recovered
              }
            }
            dateWiseTotal {
              date
              recovered
              confirmed
              deaths
            }
          }
        }
      }
    }
  `);

  return (
    <Row>
      <BarChartContainer chartData={chartData} />
    </Row>
  );
};

export default HistoryContainer;
