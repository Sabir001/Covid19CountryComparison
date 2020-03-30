export const getWorldWideData = (chartData, days, dataType) => {
  let data = [];
  let labels = [];
  if (
    chartData &&
    chartData.allRestApiHistories &&
    chartData.allRestApiHistories.edges &&
    chartData.allRestApiHistories.edges[0] &&
    chartData.allRestApiHistories.edges[0].node &&
    chartData.allRestApiHistories.edges[0].node.dateWiseTotal
  ) {
    for (
      let i = 0;
      i < days &&
      i < chartData.allRestApiHistories.edges[0].node.dateWiseTotal.length;
      i++
    ) {
      labels.push(
        chartData.allRestApiHistories.edges[0].node.dateWiseTotal[i].date
      );
      data.push(
        chartData.allRestApiHistories.edges[0].node.dateWiseTotal[i][
          `${dataType}`
        ]
      );
    }
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
  days,
  dataType
) => {
  if (selectedCountry === "all") {
    return getWorldWideData(chartData, days, dataType);
  }
  let data = [];
  let labels = [];
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
        for (let i = 0; i < days && i < histories.length; i++) {
          data.push(histories[i][`${dataType}`]);
          labels.push(histories[i].date);
        }
      }
    });
  }
  return { data, labels };
};
