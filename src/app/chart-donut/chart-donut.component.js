'use strict';

angular.
  module('chartDonut').
  component('chartDonut', {
    templateUrl: 'app/chart-donut/chart-donut.template.html',
    controller: ['CityData',
      function ChartDonutController(CityData) {
        var data = CityData.query();

        console.log(data);
      }
    ]
  });
