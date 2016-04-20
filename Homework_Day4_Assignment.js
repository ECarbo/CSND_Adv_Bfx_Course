##CSND_Advanced_Bfx_Course
##Homework_Day4_Assignment.js

##Make a plot of whatever you want (using examples allowed...)
##Also see: https://jsfiddle.net/ECarbo/2pduqk92/2/


-$(function() {




  // Prepare demo data

  var data = [

    {

      "hc-key": "dk",

      "value": 11.41

    },

    {

      "hc-key": "fo",

      "value": 11.41

    },

    {

      "hc-key": "hr",

      "value": 'na'

    },

    {

      "hc-key": "nl",

      "value": 11.65

    },

    {

      "hc-key": "ee",

      "value": 'na'

    },

    {

      "hc-key": "bg",

      "value": 10.91

    },

    {

      "hc-key": "es",

      "value": 17.71

    },

    {

      "hc-key": "it",

      "value": 16.49

    },

    {

      "hc-key": "sm",

      "value": 'na'

    },

    {

      "hc-key": "va",

      "value": 'na'

    },

    {

      "hc-key": "tr",

      "value": 0.81

    },

    {

      "hc-key": "mt",

      "value": 'na'

    },

    {

      "hc-key": "fr",

      "value": 19.4

    },

    {

      "hc-key": "no",

      "value": 5.83

    },

    {

      "hc-key": "de",

      "value": 16.67

    },

    {

      "hc-key": "ie",

      "value": 13.83

    },

    {

      "hc-key": "ua",

      "value": "na"

    },

    {

      "hc-key": "fi",

      "value": 7.84

    },

    {

      "hc-key": "se",

      "value": 8.08

    },

    {

      "hc-key": "ru",

      "value": 7.72

    },

    {

      "hc-key": "gb",

      "value": '11.24'

    },

    {

      "hc-key": "cy",

      "value": 5.99

    },

    {

      "hc-key": "pt",

      "value": 14.19

    },

    {

      "hc-key": "gr",

      "value": 11.59

    },

    {

      "hc-key": "lt",

      "value": 0

    },

    {

      "hc-key": "si",

      "value": 'na'

    },

    {

      "hc-key": "ba",

      "value": 'na'

    },

    {

      "hc-key": "mc",

      "value": 27

    },

    {

      "hc-key": "al",

      "value": 1.4

    },

    {

      "hc-key": "cnm",

      "value": 'na'

    },

    {

      "hc-key": "nc",

      "value": 'na'

    },

    {

      "hc-key": "rs",

      "value": 'na'

    },

    {

      "hc-key": "ro",

      "value": 11.41

    },

    {

      "hc-key": "me",

      "value": 'na'

    },

    {

      "hc-key": "li",

      "value": 34

    },

    {

      "hc-key": "at",

      "value": 13.4

    },

    {

      "hc-key": "sk",

      "value": 13.17

    },

    {

      "hc-key": "hu",

      "value": 15.59

    },

    {

      "hc-key": "ad",

      "value": 'na'

    },

    {

      "hc-key": "lu",

      "value": 18.03

    },

    {

      "hc-key": "ch",

      "value": 14.06

    },

    {

      "hc-key": "be",

      "value": 13.56

    },

    {

      "hc-key": "kv",

      "value": 'na'

    },

    {

      "hc-key": "pl",

      "value": 10.62

    },

    {

      "hc-key": "mk",

      "value": 'na'

    },

    {

      "hc-key": "lv",

      "value": 'na'

    },

    {

      "hc-key": "by",

      "value": 'na'

    },

    {

      "hc-key": "is",

      "value": 5.12

    },

    {

      "hc-key": "md",

      "value": 'na'

    },

    {

      "hc-key": "cz",

      "value": 13.17

    }

  ];




  // Initiate the chart

  $('#container').highcharts('Map', {




    title: {

      text: 'Recorded alcohol consumption per capita (15+)'

    },




    subtitle: {

      text: '<a href="https://code.highcharts.com/mapdata/custom/europe.js">In litres of pure alcohol</a>'

    },




    mapNavigation: {

      enabled: true,

      buttonOptions: {

        verticalAlign: 'bottom'

      }

    },




    colorAxis: {

      min: 0

    },




    series: [{

      data: data,

      mapData: Highcharts.maps['custom/europe'],

      joinBy: 'hc-key',

      name: 'Consumption per liter in a nice pink color',

      states: {

        hover: {

          color: '#fd0cff'

        }

      },

      dataLabels: {

        enabled: true,

        format: '{point.name}'

      }

    }]

  });

});
