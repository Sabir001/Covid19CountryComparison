import React from "react";
import Select from "react-select";
import { Col, Label } from "reactstrap";

const Filter = ({
  countryOption,
  selectedCountry,
  handleCountryChange,
  dataType,
  changeDataType
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
      <Col md="8" xs="12"  style={{ marginTop: "10px" }}>
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
    </>
  );
};

export default Filter;
