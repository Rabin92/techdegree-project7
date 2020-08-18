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
    2200,
    1000,
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
    2100,
    900,
    1200,
    400,
    1300,
    900,
  ];
  lineCharts.update();
};

const chartWeekly = () => {
  lineCharts.data.datasets[0].data = [
    1500,
    2000,
    2400,
    1700,
    400,
    800,
    1500,
    1800,
    2200,
    1550,
    1900,
    2500,
  ];
  lineCharts.update();
};

const chartMonthly = () => {
  lineCharts.data.datasets[0].data = [
    1500,
    1000,
    1000,
    1800,
    400,
    1020,
    1200,
    1300,
    2300,
    2000,
    1400,
    1450,
  ];
  lineCharts.update();
};
