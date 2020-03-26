import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Label } from "reactstrap";
import Loader from "../loader";

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
    console.log(data)
    console.log(data && data.results[0])
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

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <Col xs="12" lg="12">
            <Label>Total Cases: </Label>
            {totalCases} <small>+{totalNewCasesToday}</small>
          </Col>
          <Col xs="12" lg="12">
            <Label>Total Deaths: </Label>
            {totalDeaths} <small>+{totalNewDeathsToday}</small>
          </Col>
          <Col xs="12" lg="12">
            <Label>Total Recovered: </Label>
            {totalRecovered}
          </Col>
          <Col xs="12" lg="12">
            <Label>Total Unresolved: </Label>
            {totalUnresolved}
          </Col>
          <Col xs="12" lg="12">
            <Label>Total Active Cases: </Label>
            {totalActiveCases}
          </Col>
          <Col xs="12" lg="12">
            <Label>Total Serious Cases: </Label>
            {totalSeriousCases}
          </Col>
        </Row>
      )}
    </div>
  );
}

export default RecentDataContainer;
