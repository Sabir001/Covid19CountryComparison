export const getWorldWideData = (chartData, days) => {
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
        chartData.allRestApiHistories.edges[0].node.dateWiseTotal[i].confirmed
      );
    }
  }
  return { data, labels };
};
