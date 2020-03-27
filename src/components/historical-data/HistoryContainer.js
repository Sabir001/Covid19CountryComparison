import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const HistoryContainer = () => {
  const data = useStaticQuery(graphql`
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
      <h1>Source Rest Api</h1>
    </div>
  );
};

export default HistoryContainer;
