#https://jsfiddle.net/ECarbo/a4Lh9hjj/1/show/

$(function () {
    // Instanciate the map
    $('#container').highcharts('Map', {
        chart: {
            borderWidth: 1
        },

        title: {
            text: 'E-Rare INSAID partners'
        },
        subtitle: {
            text: 'Overview of collaborating countries'
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Country',
            mapData: Highcharts.maps['custom/europe'],
            data: [{
                code: 'DE',
                value: 1
            }, {
                code: 'NL',
                value: 1
            }, {
                code: 'TR',
                value: 1
            }, {
                code: 'FR',
                value: 1
            }, {
                code: 'ES',
                value: 1
            }, {
                code: 'AT',
                value: 1
            }, {
                code: 'IT',
                value: 1
            }],
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                formatter: function () {
                    if (this.point.value) {
                        return this.point.name;
                    }
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}'
            }
        }]
    });
});
