import React from "react";
import { Col, Row, Label } from "reactstrap";

const RecentData = ({
  totalCases,
  totalRecovered,
  totalDeaths,
  totalActiveCases,
  affectedCountries
}) => (
  <Row>
    <Col xs="12" lg="12">
      <Label>Total Cases: </Label> {totalCases}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Deaths: </Label> {totalDeaths}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Recovered: </Label> {totalRecovered}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Active Cases: </Label> {totalActiveCases}
    </Col>
    <Col xs="12" lg="12">
      <Label>Total Affected Countries: </Label> {affectedCountries}
    </Col>
  </Row>
);

export default RecentData;
