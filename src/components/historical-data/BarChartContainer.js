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
  const [barLabel, setBarLabel] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [countryOption, setCountryOption] = useState([]);

  const handleCountryChange = e => {
    setSelectedCountry(e.value);
  };

  useEffect(() => {
    const { data, labels } = getWorldWideData(chartData, 10);
    setCountryOption(getCountryOptionList(chartData));
    setBarData(data);
    setBarLabel(labels);
  }, [chartData]);

  useEffect(() => {
    const { data, labels } = getCountryWiseData(chartData, selectedCountry, 10);
    setBarData(data);
    setBarLabel(labels);
  }, [selectedCountry]);

  return (
    <>
      <Filter
        countryOption={countryOption}
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
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
            ? "World Wide Confirmed Cases"
            : `${selectedCountry}'s  Confirmed Cases`
        }
      />
    </>
  );
};

export default BarChartContainer;
