//------------------------------------------------------------------
//--------------------------board_donut__chart----------------------
//------------------------------------------------------------------

let ctx1 = document.getElementById('board_donut__chart').getContext('2d');
let playerStatistics1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#6F52ED', '#FFB800', '#FF4C61', '#33D69F'],
                data: [20, 20, 15, 7],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 85,
        tooltips: {
            enabled: false,
        },
        title: {
            display: false
        }
    }
});

//------------------------------------------------------------------
//-------------------board_barChart__chart--------------------------
//------------------------------------------------------------------

let ctx2 = document.getElementById('board_barChart__chart').getContext('2d');
let activePlayers = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            data: [19, 15, 24, 8, 11, 10, 18, 19, 12, 17, 23],
            backgroundColor: '#6F52ED',
            // barThickness: 0.5,
            // borderColor: '#3A8282',
            // pointRadius: 5,
            // borderWidth: 1,
            // lineTension: 0
        },
        {
            data: [16, 7, 14, 7, 7, 5, 15, 12, 11, 8, 14],
            backgroundColor: '#FF7A00',
            // borderColor: '#3A8282',
            // pointRadius: 5,
            // borderWidth: 1,
            // lineTension: 0
        }],
    },
    options: {
        responsive: true,

        scales: {
            xAxes: [{
                gridLines: {
                    borderDash: [2, 2],
                    color: '#E7E7E7',
                },
                barThickness: 5,
            }],
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 25,
                },
                gridLines: {
                    borderDash: [2, 2],
                    color: '#CBCBCB'
                },
            }]
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'label',
            backgroundColor: '#3A8282',
        }
    }
});