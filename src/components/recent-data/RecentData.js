import React from "react";
import { Col, Row, Label } from "reactstrap";

const RecentData = ({
  totalCases,
  totalRecovered,
  totalUnresolved,
  totalDeaths,
  totalNewCasesToday,
  totalNewDeathsToday,
  totalActiveCases,
  totalSeriousCases
}) => (
  <Row>
    <Col xs="12" lg="12">
      <Label>Total Cases: </Label> {totalCases}{" "}
      <small>+{totalNewCasesToday}</small>
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Deaths: </Label> {totalDeaths}{" "}
      <small>+{totalNewDeathsToday}</small>
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Recovered: </Label> {totalRecovered}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Unresolved: </Label> {totalUnresolved}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Active Cases: </Label> {totalActiveCases}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Serious Cases: </Label> {totalSeriousCases}
    </Col>
  </Row>
);

export default RecentData;
