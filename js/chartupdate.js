/* ****************************** CHART UPDATE ****************************** */
const chartHourly = () => {
  lineCharts.data.datasets[0].data = [
    2000,
    1050,
    1000,
    1300,
    1600,
    1450,
    1000,
    2500,
    900,
    1200,
    1000,
  ];
  lineCharts.update();
};

const chartDaily = () => {
  lineCharts.data.datasets[0].data = [
    1000,
    1020,
    500,
    2000,
    1900,
    700,
    2500,
    1200,
    400,
    1300,
    900,
  ];
  lineCharts.update();
};
