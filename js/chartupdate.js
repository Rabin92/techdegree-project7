/* ****************************** CHART UPDATE ****************************** */
const trafficNav = document.querySelector('#js-traffic-nav');
const trafficNavLi = trafficNav.children;

const colours = [
  'rgba(77, 175, 124, .5)',
  'rgba(142, 68, 173, .5)',
  'rgba(207, 0, 15, .5)',
  'rgba(108, 122, 137, .5)',
];
const [oceanGreen, studio, monza, slateGray] = colours;

const updateChart = [
  {
    data: () => {
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
      lineCharts.data.datasets[0].backgroundColor = oceanGreen;
      lineCharts.update();
    },
  },
  {
    data: () => {
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
      lineCharts.data.datasets[0].backgroundColor = studio;
      lineCharts.update();
    },
  },
  {
    data: () => {
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
      lineCharts.data.datasets[0].backgroundColor = monza;
      lineCharts.update();
    },
  },
  {
    data: () => {
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
      lineCharts.data.datasets[0].backgroundColor = slateGray;
      lineCharts.update();
    },
  },
];

updateChart[0].data();

/*
   Add event listener to the parent element of <li> tags
*/

trafficNavLi[0].classList.add('active');

trafficNav.addEventListener('click', e => {
  const theTarget = e.target;

  for (let i = 0; i < trafficNavLi.length; i++) {
    for (let i = 0; i < updateChart.length; i++) {
      if (theTarget === trafficNavLi[i]) {
        updateChart[i].data();
        trafficNavLi[i].classList.add('active');
      } else {
        trafficNavLi[i].classList.remove('active');
      }
    }
  }
});
