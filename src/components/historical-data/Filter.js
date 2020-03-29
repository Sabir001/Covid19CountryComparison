import React from "react";
import Select from "react-select";
import { Col } from "reactstrap";

const Filter = ({ countryOption, selectedCountry, handleCountryChange }) => {
  return (
    <Col md="12" xs="12">
      <Select
        options={countryOption}
        value={selectedCountry}
        onChange={handleCountryChange}
      />
    </Col>
  );
};

export default Filter;
