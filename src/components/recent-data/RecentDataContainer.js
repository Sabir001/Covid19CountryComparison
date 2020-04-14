import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import RecentData from "./RecentData";
import PieChart from "./PieChart";
import RecentFilter from "./RecentFilter";

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
            updated
            casesPerOneMillion
            todayCases
            testsPerOneMillion
            tests
            todayDeaths
            country
            critical
            deathsPerOneMillion
          }
        }
      }
    }
  `);

  const [selectedCountry, setSelectedCountry] = useState({
    label: "all",
    value: "all"
  });

  const allCountryData =
    recentData &&
    recentData.allRestApiRecents &&
    recentData.allRestApiRecents.edges &&
    recentData.allRestApiRecents.edges.reduce(
      (total, item) => ({
        cases: total.cases + item.node.cases,
        deaths: total.deaths + item.node.deaths,
        recovered: total.recovered + item.node.recovered,
        active: total.active + item.node.active,
        todayCases: total.todayCases + item.node.todayCases,
        tests: total.tests + item.node.tests,
        todayDeaths: total.todayDeaths + item.node.todayDeaths,
        critical: total.critical + item.node.critical
      }),
      {
        cases: 0,
        deaths: 0,
        recovered: 0,
        active: 0,
        todayCases: 0,
        tests: 0,
        todayDeaths: 0,
        critical: 0
      }
    );

  const [selectedData, setSelectedData] = useState(allCountryData);

  const changeCountry = e => {
    setSelectedCountry(e);
    if (e.label === "all") {
      setSelectedData(allCountryData);
    } else {
      recentData &&
        recentData.allRestApiRecents &&
        recentData.allRestApiRecents.edges &&
        recentData.allRestApiRecents.edges.map(item => {
          if (item.node.country === e.label) {
            setSelectedData(item.node);
          }
        });
    }
  };

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

  const countries = recentData.allRestApiRecents.edges.map(node => ({
    label: node.node.country,
    value: node.node.country
  }));

  return (
    <div>
      <PieChart
        totalRecovered={selectedData.recovered}
        totalActiveCases={selectedData.active}
        totalDeaths={selectedData.deaths}
      />
      <RecentFilter
        options={countries}
        selectedCountry={selectedCountry}
        changeCountry={changeCountry}
      />
      <RecentData
        recentData={selectedData}
        affectedCountries={countries.length}
        updatedTime={
          selectedCountry.label === "all"
            ? recentData.allRestApiRecents.edges[0].node.updated
            : selectedData.updated
        }
      />
    </div>
  );
}

export default RecentDataContainer;
