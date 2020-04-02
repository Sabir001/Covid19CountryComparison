import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader";
import RecentData from "./RecentData";
import PieChart from "./PieChart";

function RecentDataContainer() {
  const [totalCases, setTotalCases] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalActiveCases, setTotalActiveCases] = useState(0);
  const [affectedCountries, setAffectedCountries] = useState(0);

  const [loading, setLoading] = useState(true);

  const handleResult = data => {
    if (data) {
      setTotalCases(data.cases);
      setTotalRecovered(data.recovered);
      setTotalDeaths(data.deaths);
      setTotalActiveCases(data.active);
      setAffectedCountries(data.affectedCountries);
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
      .get(`https://corona.lmao.ninja/all`)
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
        totalActiveCases={totalActiveCases}
        totalDeaths={totalDeaths}
      />
      <RecentData
        totalCases={totalCases}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        totalActiveCases={totalActiveCases}
        affectedCountries={affectedCountries}
      />
    </div>
  );
}

export default RecentDataContainer;
