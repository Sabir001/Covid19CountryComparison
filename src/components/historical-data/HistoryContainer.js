import React from "react";
import { graphql, useStaticQuery } from "gatsby";
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
    <div>
      <BarChartContainer chartData={chartData} />
    </div>
  );
};

export default HistoryContainer;
