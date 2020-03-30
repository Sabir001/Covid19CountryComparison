import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import Filter from "./Filter";
import {
  getWorldWideData,
  getCountryOptionList,
  getCountryWiseData
} from "../../utils/helper";

const BarChartContainer = ({ chartData }) => {
  const [barData, setBarData] = useState([]);
  const [dataType, setDataType] = useState("confirmed");
  const [barLabel, setBarLabel] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [countryOption, setCountryOption] = useState([]);

  const handleCountryChange = e => {
    setSelectedCountry(e.value);
  };

  const changeDataType = e => {
    setDataType(e.value);
  };

  useEffect(() => {
    const { data, labels } = getWorldWideData(chartData, 10, dataType);
    setCountryOption(getCountryOptionList(chartData));
    setBarData(data);
    setBarLabel(labels);
  }, [chartData]);

  useEffect(() => {
    const { data, labels } = getCountryWiseData(
      chartData,
      selectedCountry,
      10,
      dataType
    );
    setBarData(data);
    setBarLabel(labels);
  }, [selectedCountry]);

  useEffect(() => {
    const { data, labels } = getCountryWiseData(
      chartData,
      selectedCountry,
      10,
      dataType
    );
    setBarData(data);
    setBarLabel(labels);
  }, [dataType]);

  return (
    <>
      <Filter
        countryOption={countryOption}
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        dataType={dataType}
        changeDataType={changeDataType}
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
