import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader";
import RecentData from "./RecentData";
import PieChart from "./PieChart";

function RecentDataContainer() {
  const [totalCases, setTotalCases] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalUnresolved, setTotalUnresolved] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalNewCasesToday, setTotalNewCasesToday] = useState(0);
  const [totalNewDeathsToday, setTotalNewDeathsToday] = useState(0);
  const [totalActiveCases, setTotalActiveCases] = useState(0);
  const [totalSeriousCases, setTotalSeriousCases] = useState(0);

  const [loading, setLoading] = useState(true);

  const handleResult = data => {
    if (data && data.results && data.results[0]) {
      setTotalCases(data.results[0].total_cases);
      setTotalRecovered(data.results[0].total_recovered);
      setTotalUnresolved(data.results[0].total_unresolved);
      setTotalDeaths(data.results[0].total_deaths);
      setTotalNewCasesToday(data.results[0].total_new_cases_today);
      setTotalNewDeathsToday(data.results[0].total_new_deaths_today);
      setTotalActiveCases(data.results[0].total_active_cases);
      setTotalSeriousCases(data.results[0].total_serious_cases);
    }
    setLoading(false);
  };

  const handleError = e => {
    console.log(e);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://thevirustracker.com/free-api?global=stats`)
      .then(
        response => response && response.data && handleResult(response.data)
      )
      .catch(e => handleError(e));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <PieChart
        totalRecovered={totalRecovered}
        totalUnresolved={totalUnresolved}
        totalDeaths={totalDeaths}
      />
      <RecentData
        totalCases={totalCases}
        totalRecovered={totalRecovered}
        totalUnresolved={totalUnresolved}
        totalDeaths={totalDeaths}
        totalNewCasesToday={totalNewCasesToday}
        totalNewDeathsToday={totalNewDeathsToday}
        totalActiveCases={totalActiveCases}
        totalSeriousCases={totalSeriousCases}
      />
    </div>
  );
}

export default RecentDataContainer;
