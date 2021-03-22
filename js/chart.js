// Select elements
let lineChart = document.querySelector('#js-lineChart').getContext('2d');
let barChart = document.querySelector('#js-barChart').getContext('2d');
let donutChart = document.querySelector('#js-donutChart').getContext('2d');

/* ******************************* LINE CHART ******************************* */

let lineCharts = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],

    datasets: [
      {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        pointBorderColor: '#ff6666',
        pointBackgroundColor: '#fff',
        pointBorderWidth: '4',
        data: [
          750,
          1250,
          1000,
          2000,
          1500,
          1750,
          1250,
          1850,
          400,
          2250,
          1500,
          2500,
        ],
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

/* ******************************** BAR CHART ******************************* */

barChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

    datasets: [
      {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: '#7477BF',
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
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],

    datasets: [
      {
        data: [2000, 550, 500],
        backgroundColor: ['#e84c3d', '#9a59b5', '#2db696'],
      },
    ],
  },
  // Configuration options
  options: {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold',
        padding: 20,
        fontSize: 15,
      },
    },
  },
});
