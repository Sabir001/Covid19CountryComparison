import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BarChart from "./BarChart";

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
      <BarChart chartData={chartData} />
    </div>
  );
};

export default HistoryContainer;
