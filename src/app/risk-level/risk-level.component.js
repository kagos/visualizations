'use strict';

angular
  .module('riskLevel')
  .component('riskLevel', {
    template: '<div class="col-md-6 outer-chart-container">' +
                '<h2>{{ $ctrl.subtitle }}</h2>' +
                '<div class="chart-container">' +
                  '<canvas class="chart chart-doughnut" ' +
                    'chart-data="$ctrl.data" ' +
                    'chart-labels="$ctrl.labels" ' +
                    'chart-legend="$ctrl.legend"></canvas>' +
                  '</div>' +
              '</div>',

    controller: ['$http', 'CityDataService',
      function RiskLevelDonutChartCtrl($http, CityDataService) {
        var self = this;
        self.subtitle = 'Establishment Risk Levels';

        setTimeout(function() {
          CityDataService.getCityData($http).success(function(dataObj) {

            var data = [];
            var labels = [];
            var riskObj = common.buildCountObj(dataObj, 'risk');

            // Iterate through riskObj to create arrays for labels and the count of
            // occurrences of those labels...
            $.each(riskObj, function(value, key) {
              labels.push(value);
              data.push(key);
            });

            // Assign new arrays to this for usage with the donut chart
            self.labels = labels;
            self.data = data;

          }).error(function(err) {
            console.log(err);
          });
        }, 1000);
      }
    ]}
  );
