import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import Filter from "./Filter";
import { getCountryOptionList, getCountryWiseData } from "../../utils/helper";

const BarChartContainer = ({ chartData }) => {
  const [barData, setBarData] = useState([]);
  const [secondBarData, setsecondBarData] = useState([]);
  const [dataType, setDataType] = useState("confirmed");
  const [seccondDataType, setSeccondDataType] = useState("recovered");
  const [barLabel, setBarLabel] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [countryOption, setCountryOption] = useState([]);
  const [compare, setCompare] = useState(true);
  const [secondCountry, setSecondCountry] = useState("all");
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

  const handleSecondCountryChange = e => {
    setSecondCountry(e.value);
  };

  const changeDataType = e => {
    setDataType(e);
  };

  const changeSecondDataType = e => {
    setSeccondDataType(e);
  };

  useEffect(() => {
    setCountryOption(getCountryOptionList(chartData));
  }, [chartData]);

  useEffect(() => {
    const firstDataSet = getCountryWiseData(
      chartData,
      selectedCountry,
      startDate,
      endDate,
      dataType
    );
    const secondDataSet = getCountryWiseData(
      chartData,
      secondCountry,
      startDate,
      endDate,
      seccondDataType
    );
    setsecondBarData(compare ? secondDataSet.data : []);
    setBarData(firstDataSet.data);
    setBarLabel(firstDataSet.labels);
  }, [
    selectedCountry,
    startDate,
    endDate,
    dataType,
    chartData,
    compare,
    seccondDataType,
    secondCountry
  ]);

  return (
    <>
      <Filter
        countryOption={countryOption}
        selectedCountry={selectedCountry}
        handleCountryChange={handleCountryChange}
        compare={compare}
        setCompare={setCompare}
        secondCountry={secondCountry}
        seccondDataType={seccondDataType}
        changeSecondDataType={changeSecondDataType}
        handleSecondCountryChange={handleSecondCountryChange}
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
          },
          scales: {
            xAxes: [
              {
                stacked: false
              }
            ],
            yAxes: [
              {
                stacked: false
              }
            ]
          }
        }}
        barData={barData}
        secondBarData={secondBarData}
        barLabel={barLabel}
        datasetLabel={
          selectedCountry === "all"
            ? `World Wide ${dataType} Cases`
            : `${selectedCountry}'s  ${dataType} cases`
        }
        secondDataSetLabel={
          secondCountry === "all"
            ? `World Wide ${seccondDataType} Cases`
            : `${secondCountry}'s  ${seccondDataType} cases`
        }
      />
    </>
  );
};

export default BarChartContainer;
