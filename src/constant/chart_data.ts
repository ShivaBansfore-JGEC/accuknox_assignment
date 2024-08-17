export const CHART_SIZE = {
    WIDTH: 550,
    HEIGHT: 250
}

export const CHART_CLOUD_ACCOUNTS = {
    colors: ['#5578ff', '#e1ebff'],
    chart: {
        type: 'pie',
        height: CHART_SIZE.HEIGHT,
        width: CHART_SIZE.WIDTH
    },
    title: {
        text: ''
    },
    subtitle: {
        text: `Total: 4`, // Display total in the center
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}: {y} %'
            },
            showInLegend: true
        }
    },
    legend: {
        labelFormatter: function (this: { name: string, y: number }) {
            return `${this.name}(${100 / this.y})`
        }
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'Conected',
            y: 50
        }, {
            name: 'Not Connected',
            y: 50
        }]
    }]
}


export const CHART_CLOUD_RISK_ASSESSMENT = {
    colors: ['#19a55a', '#b9140f', '#fad732', '#b7d7cd'],
    chart: {
        type: 'pie',
        height: CHART_SIZE.HEIGHT,
        width: CHART_SIZE.WIDTH
    },
    title: {
        text: ''
    },
    subtitle: {
        text: `Total: 1000`, // Display total in the center
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}: {y} %'
            },
            showInLegend: true,
            innerSize: '30%',
            size: '100%'
        }
    },
    legend: {
        labelFormatter: function (this: { name: string, y: number }) {
            return `${this.name}(${1000 * (this.y / 100)})`
        }
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'Passed',
            y: 40
        },
        {
            name: 'Failed',
            y: 30
        },
        {
            name: 'Warning',
            y: 25
        },
        {
            name: 'Not available',
            y: 5
        },
        ]
    }]
}


export const CHART_CWPP_SPECIFIC_ALERTS = {
    chart: {
        height: CHART_SIZE.HEIGHT,
        width: CHART_SIZE.WIDTH
    },
    title: {
        text: 'U.S Solar Employment Growth',
        align: 'left'
    },

    subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation & Developers',
        data: [
            43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610, 168960, 171558
        ]
    }, {
        name: 'Manufacturing',
        data: [
            24916, 37941, 29742, 29851, 32490, 30282,
            38121, 36885, 33726, 34243, 31050, 33099, 33473
        ]
    }, {
        name: 'Sales & Distribution',
        data: [
            11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 25663, 28978, 30618
        ]
    }, {
        name: 'Operations & Maintenance',
        data: [
            null, null, null, null, null, null, null,
            null, 11164, 11218, 10077, 12530, 16585
        ]
    }, {
        name: 'Other',
        data: [
            21908, 5548, 8105, 11248, 8989, 11816, 18274,
            17300, 13053, 11906, 10073, 11471, 11648
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

}

export const CHART_CWPP_WORKLOAD = {
    chart: {
        type: 'column',
        height: CHART_SIZE.HEIGHT,
        width: CHART_SIZE.WIDTH
    },
    title: {
        text: 'Workload',
        align: 'center'
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
        ]
    },

    plotOptions: {
        series: {
            pointWidth: 20
        }
    },

    series: [{
        data: [
            29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4
        ]
    }]
}

export const CHART_IMAGE_RISK_ASSESMENT = {
    chart: {
        type: 'bar',
        height: CHART_SIZE.HEIGHT,
        width: CHART_SIZE.WIDTH
    },
    title: {
        text: 'Ferry passengers by vehicle type 2024',
        align: 'center'
    },
    xAxis: {
        categories: [
            'January', 'February', 'March', 'April', 'May'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Motorcycles',
        data: [74, 27, 52, 93, 1272]
    }, {
        name: 'Null-emission vehicles',
        data: [2106, 2398, 3046, 3195, 4916]
    }, {
        name: 'Conventional vehicles',
        data: [12213, 12721, 15242, 16518, 25037]
    }]
}

export const IMAGE_SECURITY_ISSUE = {
    chart: {
        height: CHART_SIZE.HEIGHT,
        width: CHART_SIZE.WIDTH
    },
    xAxis: {
        type: 'datetime'
    },
    title: {
        text: 'Security issue',
        align: 'center'
    },
    plotOptions: {
        series: {
            pointStart: Date.UTC(2010, 0, 1),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },

    series: [{
        data: [
            29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4
        ]
    }, {
        data: [
            144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5,
            106.4, 129.2
        ]
    }]
}