import React from "react";
import Select from "react-select";
import { Col } from "reactstrap";

const Filter = ({
  countryOption,
  selectedCountry,
  handleCountryChange,
  dataType,
  changeDataType
}) => {
  return (
    <>
      <Col md="12" xs="12">
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
      <Col md="12" xs="12">
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
