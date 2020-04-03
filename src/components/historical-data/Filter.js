import React from "react";
import Select from "react-select";
import { Col, Label, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({
  countryOption,
  selectedCountry,
  handleCountryChange,
  compare,
  setCompare,
  secondCountry,
  handleSecondCountryChange,
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
      <Col md="12" xs="12" style={{ marginTop: "10px" }}>
        <Label check>
          Compare Another Country?{" "}
          <Input
            type="checkbox"
            style={{ marginLeft: "20px", marginTop: "7px" }}
            checked={compare}
            onChange={() => setCompare(!compare)}
          />
        </Label>
      </Col>
      {compare && (
        <>
          <Col md="4" xs="12" style={{ marginTop: "10px" }}>
            <Label>Select Country</Label>
          </Col>
          <Col md="8" xs="12" style={{ marginTop: "10px" }}>
            <Select
              options={countryOption}
              className="country-selector"
              classNamePrefix="country-select"
              value={
                secondCountry === "all"
                  ? { value: "all", label: "All Countries" }
                  : { value: secondCountry, label: secondCountry }
              }
              onChange={handleSecondCountryChange}
            />
          </Col>
        </>
      )}
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
