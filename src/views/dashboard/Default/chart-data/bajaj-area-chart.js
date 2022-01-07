// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //

const chartData = {
    type: 'area',
    height: 10,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 1
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => ' Games '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: []
        }
    ]
    
};

export default chartData;
