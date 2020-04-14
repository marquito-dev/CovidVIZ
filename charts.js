Chart.defaults.global.defaultFontColor='white';

var ctx = document.getElementById('myBarChart').getContext("2d");
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels:['Nov','Dic','Ene','Feb','Mar','Abr'],
      datasets: [{
        label: "Norwegian Cruise Line",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.4)",
        borderColor: "rgb(32,228,237)", // The main line color
        borderCapStyle: 'square',
        borderDash: [], // try [5, 15] for instance
        borderDashOffset: 0.0,
        borderJlaoinStyle: 'miter',
        pointBorderColor: "white",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "brown",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: true
        data: [51, 54, 59, 54, 37, 10],
        spanGaps: true,
      }, {
        label: "Carnival",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.4)",
        borderColor: "rgb(5, 229, 191)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "white",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "brown",
        pointHoverBorderColor: "yellow",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: false
        data: [43, 45, 51, 43, 32, 12],
        spanGaps: false,
      }, {
        label: "Royal Caribbean",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.4)",
        borderColor: "rgb(183,237,107)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "white",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "brown",
        pointHoverBorderColor: "yellow",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: false
        data: [110, 120, 135, 116, 81, 30],
        spanGaps: false,
      }

  ]
    },

    options:{
      scales:{
        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: '',
                                fontColor:'white',
                                fontSize:10
                            },
                            ticks: {
                               fontColor: "white",
                               fontSize: 14
                              }
                        }],
        yAxes:[{
          ticks:{
            fontColor: 'white',
            beginAtZero:false
          },
                scaleLabel: {
                     display: false,
                     labelString: 'Trade prices (USD)',
                     fontSize: 20,
                     fontColor: 'white'
                  }
        }]
      }
    }

  });

//para ocultar los labels
Chart.defaults.global.legend.display = false;


  var ctx = document.getElementById("myDonaChart");
  var myDonaChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Diamond Princess', 'Ruby Princess', 'Grand Princess', 'Ovation of the Seas', 'Nile River cruise ship', 'Greg Mortimer'],
    display: true,
    datasets: [{
      label: '# de casos',
      data: [712, 662, 103, 79, 45, 81],
      backgroundColor: [
        'rgb(32,228,237)',
        'rgb(45, 70, 230)',
        'rgb(183,237,107)',
        'rgb(5, 229, 191)',
        'rgb(139, 108, 234)',
        'rgb(189, 107, 242)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 0.1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});


//Grafica barras  stacked

var ctx = document.getElementById("myStackedBarChart");
var myStackedBarChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: ['Diamond Princess', 'Ruby Princess', 'Grand Princess', 'Ovation of the Seas', 'Artania', 'Greg Mortimer'],
  display: true,
  datasets: [{
    label: 'Pasajeros',
    backgroundColor:'rgb(32,228,237)',
    stack: 'Stack 0',
    data: [2666,2700,2422,3000,800]
			}, {
				label: 'Crew',
				backgroundColor:'rgb(45, 70, 230)',
				stack: 'Stack 0',
				data: [1045,1100,1111,0,500,217]
			}, {
				label: 'Casos confirmados',
        backgroundColor:'rgb(183,237,107)',
				stack: 'Stack 1',
				data: [712,662,103,79,65,128],


  }]
},
options: {
					title: {
						display: false,
						text: 'Chart.js Bar Chart - Stacked'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						x: {
							stacked: true,
						},
						y: {
							stacked: true
						}
					}
				}
});

// RAdar charts

var ctx = document.getElementById("myRadarPassChart");
var myRadarPassChart = new Chart(ctx, {
type: 'radar',
data: {
  labels: ['Japan','USA','Hong Kong','Canada','Australia','UK','Otro'],
  display: true,
  datasets: [{
    label: 'Pasajeros',
					backgroundColor: "rgba(189,107,242,0.4)",
					borderColor: "rgba(189,107,242)",
					pointBackgroundColor: "rgb(250,250,250)",
					data: [1281,416,260,251,223,57,178]
  }]
},
options: {
				legend: {
					position: 'top',
				},
				title: {
					display: false,
					text: 'Chart.js Radar Chart'
				},
				scale: {
					beginAtZero: true
				}
			}

});
