/* ******************************** BAR CHART ******************************* */

// Select myChart and store it in a variable
let barChart = document.querySelector("#js-barChart").getContext("2d");
let donutChart = document.querySelector("#js-donutChart").getContext("2d");

// Create a chart
barChart = new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],

    datasets: [
      {
        backgroundColor: "#7477BF",
        borderColor: "#7477BF",
        data: [75, 115, 175, 125, 225, 200, 100],
      },
    ],
  },
  // Configuration options
  options: {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: false,

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

/* ****************************** DONUT CHART ****************************** */
donutChart = new Chart(donutChart, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "Phones"],

    datasets: [
      {
        data: [2000, 550, 500],
        backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
      },
    ],
  },
  // Configuration options
  options: {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: false,
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
        padding: 20,
        fontSize: 15,
      },
    },
  },
});
