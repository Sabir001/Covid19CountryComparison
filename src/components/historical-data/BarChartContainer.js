import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import Filter from "./Filter";
import {
  getCountryOptionList,
  getCountryWiseData
} from "../../utils/helper";

const BarChartContainer = ({ chartData }) => {
  const [barData, setBarData] = useState([]);
  const [dataType, setDataType] = useState("confirmed");
  const [barLabel, setBarLabel] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [countryOption, setCountryOption] = useState([]);
  const today = new Date();
  const maxDate = new Date().setDate(today.getDate() - 1);
  const minDate = new Date(2020, 0, 22);
  const [startDate, setStartDate] = useState(
    new Date().setDate(today.getDate() - 11)
  );
  const [endDate, setEndDate] = useState(
    new Date().setDate(today.getDate() - 1)
  );

  const handleCountryChange = e => {
    setSelectedCountry(e.value);
  };

  const changeDataType = e => {
    setDataType(e.value);
  };

  useEffect(() => {
    setCountryOption(getCountryOptionList(chartData));
  }, [chartData]);

  useEffect(() => {
    const { data, labels } = getCountryWiseData(
      chartData,
      selectedCountry,
      startDate,
      endDate,
      dataType
    );
    setBarData(data);
    setBarLabel(labels);
  }, [selectedCountry, startDate, endDate, dataType, chartData]);

  return (
    <>
      <Filter
        countryOption={countryOption}
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        dataType={dataType}
        changeDataType={changeDataType}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        maxDate={maxDate}
        minDate={minDate}
      />
      <BarChart
        options={{
          legend: {
            onClick: e => e.stopPropagation()
          }
        }}
        barData={barData}
        barLabel={barLabel}
        datasetLabel={
          selectedCountry === "all"
            ? `World Wide ${dataType} Cases`
            : `${selectedCountry}'s  ${dataType} cases`
        }
      />
    </>
  );
};

export default BarChartContainer;
