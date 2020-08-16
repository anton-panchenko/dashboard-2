document.addEventListener('DOMContentLoaded', function () {

    let columnChart = Highcharts.chart('columnChart', {
        chart: {
            type: 'column',
            spacingBottom: 0,
            spacingTop: 8,
            spacingLeft: 0,
            spacingRight: 0,
            style: {
                fontFamily: 'Gilroy, Helvetica, Arial, sans-serif',
            }
        },
        credits: {
            enabled: false
        },
        title: false,
        legend: {
            enabled: false
        },
        colors: ['#6F52ED', '#FF7A00'],
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yAxis: {
            title: false,
            gridLineDashStyle: 'LongDash',
            max: 23,
            gridLineWidth: 1,
        },
        plotOptions: {
            column: {
                groupPadding: 0.3,
                pointWidth: 5,
                borderWidth: 0,
                borderRadius: 3,
            }
        },
        series: [{
            name: 'Applied',
            data: [19, 15, 24, 8, 11, 10, 18, 19, 12, 17, 23],

        }, {
            name: 'Left',
            data: [16, 7, 14, 7, 7, 5, 15, 12, 11, 8, 14],
        }]
    });

    let donutChart = Highcharts.chart('donutChart', {
        chart: {
            type: 'pie',
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
        },
        credits: {
            enabled: false
        },
        title: false,
        legend: {
            enabled: false
        },
        plotOptions: {
            pie: {
                innerSize: '85%',
                dataLabels: {
                    enabled: false
                }
            },
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                },
                enableMouseTracking: false
            }
        },
        tooltip: {
            enabled: false
        },
        colors: ['#6F52ED', '#FFB800', '#FF4C61', '#33D69F'],
        series: [{
            data: [20, 20, 15, 7]
        }]
    });
});