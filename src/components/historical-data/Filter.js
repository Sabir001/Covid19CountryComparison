import React, { useState } from "react";
import Select from "react-select";
import { Col, Label } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({
  countryOption,
  selectedCountry,
  handleCountryChange,
  dataType,
  changeDataType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  minDate,
  maxDate
}) => {
  return (
    <>
      <Col md="4" xs="12">
        <Label>Select Data Type</Label>
      </Col>
      <Col md="8" xs="12">
        <Select
          options={[
            { label: "confirmed", value: "confirmed" },
            { label: "recovered", value: "recovered" },
            { label: "deaths", value: "deaths" }
          ]}
          className="country-selector"
          classNamePrefix="country-select"
          value={{ value: dataType, label: dataType }}
          onChange={changeDataType}
        />
      </Col>
      <Col md="4" xs="12" style={{ marginTop: "10px" }}>
        <Label>Select Country</Label>
      </Col>
      <Col md="8" xs="12" style={{ marginTop: "10px" }}>
        <Select
          options={countryOption}
          className="country-selector"
          classNamePrefix="country-select"
          value={
            selectedCountry === "all"
              ? { value: "all", label: "All Countries" }
              : { value: selectedCountry, label: selectedCountry }
          }
          onChange={handleCountryChange}
        />
      </Col>
      <Col md="4" xs="12" style={{ marginTop: "10px" }}>
        <Label>Select Date Range</Label>
      </Col>
      <Col md="8" xs="12" style={{ marginTop: "10px" }}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          maxDate={endDate}
        />
      </Col>
      <Col md={{ size: 8, offset: 4 }} xs="12">
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={maxDate}
        />
      </Col>
    </>
  );
};

export default Filter;
