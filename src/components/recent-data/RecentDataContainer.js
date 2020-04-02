import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import RecentData from "./RecentData";
import PieChart from "./PieChart";

function RecentDataContainer() {
  const recentData = useStaticQuery(graphql`
    query {
      allRestApiRecents {
        edges {
          node {
            cases
            deaths
            recovered
            active
            affectedCountries
            updated
          }
        }
      }
    }
  `);

  if (
    !(
      recentData &&
      recentData.allRestApiRecents &&
      recentData.allRestApiRecents.edges &&
      recentData.allRestApiRecents.edges[0] &&
      recentData.allRestApiRecents.edges[0].node
    )
  ) {
    return <></>;
  }

  return (
    <div>
      <PieChart
        totalRecovered={recentData.allRestApiRecents.edges[0].node.recovered}
        totalActiveCases={recentData.allRestApiRecents.edges[0].node.active}
        totalDeaths={recentData.allRestApiRecents.edges[0].node.deaths}
      />
      <RecentData
        totalCases={recentData.allRestApiRecents.edges[0].node.cases}
        totalRecovered={recentData.allRestApiRecents.edges[0].node.recovered}
        totalDeaths={recentData.allRestApiRecents.edges[0].node.deaths}
        totalActiveCases={recentData.allRestApiRecents.edges[0].node.active}
        affectedCountries={
          recentData.allRestApiRecents.edges[0].node.affectedCountries
        }
        updatedTime={recentData.allRestApiRecents.edges[0].node.updated}
      />
    </div>
  );
}

export default RecentDataContainer;
