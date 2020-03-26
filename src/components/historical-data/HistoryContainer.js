import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const HistoryContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allRestApiHistories {
        edges {
          node {
            id
            country
            histories {
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

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Source Rest Api</h1>
    </div>
  );
};

export default HistoryContainer;
