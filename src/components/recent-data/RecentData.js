import React from "react";
import { Col, Row, Label } from "reactstrap";
import moment from "moment";

const RecentData = ({ recentData, affectedCountries, updatedTime }) => {
  const lastUpdated = moment(updatedTime);
  return (
    <Row>
      <Col xs="12" lg="12">
        <Label>Total Cases: </Label> {recentData.cases}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Deaths: </Label> {recentData.deaths}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Recovered: </Label> {recentData.recovered}
      </Col>
      <Col xs="12" lg="12">
        <Label>Total Active Cases: </Label> {recentData.active}
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
