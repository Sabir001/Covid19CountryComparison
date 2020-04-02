import moment from "moment";

const getWorldWideData = (chartData, startDate, endDate, dataType) => {
  let data = [];
  let labels = [];
  const start = moment(startDate);
  const end = moment(endDate);
  if (
    chartData &&
    chartData.allRestApiHistories &&
    chartData.allRestApiHistories.edges &&
    chartData.allRestApiHistories.edges[0] &&
    chartData.allRestApiHistories.edges[0].node &&
    chartData.allRestApiHistories.edges[0].node.dateWiseTotal
  ) {
    chartData.allRestApiHistories.edges[0].node.dateWiseTotal.map(dayData => {
      if (
        start.isSameOrBefore(dayData.date, "day") &&
        end.isSameOrAfter(dayData.date, "day")
      ) {
        labels.push(dayData.date);
        data.push(dayData[`${dataType}`]);
      }
    });
  }
  return { data, labels };
};

export const getCountryOptionList = chartData => {
  let countryOptionList = [{ value: "all", label: "All Countries" }];
  chartData &&
    chartData.allRestApiHistories &&
    chartData.allRestApiHistories.edges &&
    chartData.allRestApiHistories.edges[0] &&
    chartData.allRestApiHistories.edges[0].node &&
    chartData.allRestApiHistories.edges[0].node.countries.map(item => {
      countryOptionList.push({ value: item, label: item });
    });

  return countryOptionList;
};

export const getCountryWiseData = (
  chartData,
  selectedCountry,
  startDate,
  endDate,
  dataType
) => {
  if (selectedCountry === "all") {
    return getWorldWideData(chartData, startDate, endDate, dataType);
  }
  let data = [];
  let labels = [];
  const start = moment(startDate);
  const end = moment(endDate);
  if (
    chartData &&
    chartData.allRestApiHistories &&
    chartData.allRestApiHistories.edges &&
    chartData.allRestApiHistories.edges[0] &&
    chartData.allRestApiHistories.edges[0].node &&
    chartData.allRestApiHistories.edges[0].node.result
  ) {
    chartData.allRestApiHistories.edges[0].node.result.map(item => {
      if (item && item.country === selectedCountry) {
        let histories = item && item.histories.slice().reverse();
        histories.map(history => {
          if (
            start.isSameOrBefore(history.date, "day") &&
            end.isSameOrAfter(history.date, "day")
          ) {
            data.push(history[`${dataType}`]);
            labels.push(history.date);
          }
        });
      }
    });
  }
  return { data, labels };
};
