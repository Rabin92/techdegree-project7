/* ****************************** CHART UPDATE ****************************** */
const trafficNav = document.querySelector("#js-traffic-nav");

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
  lineCharts.data.datasets[0].borderColor = ["#000"];
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
  lineCharts.data.datasets[0].borderColor = ["grey"];
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
  lineCharts.data.datasets[0].borderColor = ["darkgreen"];
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
    2500,
  ];
  lineCharts.data.datasets[0].borderColor = ["purple"];
  lineCharts.update();
};

/*
   Add event listener to the parent element of <li> tags
   If the 'id' matches, apply the call function to update the chart data
*/

trafficNav.addEventListener("click", (e) => {
  const theTarget = e.target;
  if (theTarget.id === "js-hourly") {
    chartHourly();
  } else if (theTarget.id === "js-daily") {
    chartDaily();
  } else if (theTarget.id === "js-weekly") {
    chartWeekly();
  } else if (theTarget.id === "js-monthly") {
    chartMonthly();
  }
});
