import React from "react";
import Select from "react-select";
import { Col, Label, Input, Button, ButtonGroup } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({
  countryOption,
  selectedCountry,
  handleCountryChange,
  compare,
  setCompare,
  secondCountry,
  seccondDataType,
  changeSecondDataType,
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
        <ButtonGroup>
          <Button
            color="secondary"
            onClick={() => changeDataType("confirmed")}
            active={dataType === "confirmed"}
          >
            Confirmed
          </Button>
          <Button
            color="secondary"
            onClick={() => changeDataType("recovered")}
            active={dataType === "recovered"}
          >
            Recovered
          </Button>
          <Button
            color="secondary"
            onClick={() => changeDataType("deaths")}
            active={dataType === "deaths"}
          >
            Deaths
          </Button>
        </ButtonGroup>
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
          Compare Another?{" "}
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
          <Col md="4" xs="12" style={{ marginTop: "10px" }}>
            <Label>Select Data Type</Label>
          </Col>
          <Col md="8" xs="12" style={{ marginTop: "10px" }}>
            <ButtonGroup>
              <Button
                color="secondary"
                onClick={() => changeSecondDataType("confirmed")}
                active={seccondDataType === "confirmed"}
              >
                Confirmed
              </Button>
              <Button
                color="secondary"
                onClick={() => changeSecondDataType("recovered")}
                active={seccondDataType === "recovered"}
              >
                Recovered
              </Button>
              <Button
                color="secondary"
                onClick={() => changeSecondDataType("deaths")}
                active={seccondDataType === "deaths"}
              >
                Deaths
              </Button>
            </ButtonGroup>
            <Select
              options={[
                { label: "confirmed", value: "confirmed" },
                { label: "recovered", value: "recovered" },
                { label: "deaths", value: "deaths" }
              ]}
              className="country-selector"
              classNamePrefix="country-select"
              value={{ value: seccondDataType, label: seccondDataType }}
              onChange={changeSecondDataType}
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
