import React from "react";
import { Col, Row, Label } from "reactstrap";
import moment from "moment";

const RecentData = ({
  totalCases,
  totalRecovered,
  totalDeaths,
  totalActiveCases,
  affectedCountries,
  updatedTime
}) => {
  const lastUpdated = moment(updatedTime);
  return (
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
      <Col xs="12" lg="12">
        <Label>Date Updated: </Label> {lastUpdated.format("h:hh A")}
      </Col>
    </Row>
  );
};

export default RecentData;
