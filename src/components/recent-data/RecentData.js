import React from "react";
import { Col, Row, Label } from "reactstrap";
import moment from "moment";

import { convertNumbersInCommas } from "../../utils/helper";

const RecentData = ({ recentData, affectedCountries, updatedTime }) => {
  const lastUpdated = moment(updatedTime);
  return (
    <Row>
      <Col xs="12" lg="12">
        <Label>Total Cases: </Label> {convertNumbersInCommas(recentData.cases)}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Deaths: </Label>{" "}
        {convertNumbersInCommas(recentData.deaths)}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Recovered: </Label>{" "}
        {convertNumbersInCommas(recentData.recovered)}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Active Cases: </Label>{" "}
        {convertNumbersInCommas(recentData.active)}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Affected Countries: </Label> {affectedCountries}
      </Col>
      <Col xs="12" lg="12">
        <Label>Last Updated: </Label> {lastUpdated.format("hh:mm A")}
      </Col>
    </Row>
  );
};

export default RecentData;
