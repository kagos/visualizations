'use strict';

angular
  .module('inspectionResults')
  .component('inspectionResults', {
    template: '<div class="col-md-6 outer-chart-container">' +
                '<h2>{{ $ctrl.subtitle }}</h2>' +
                '<div class="chart-container">' +
                  '<canvas class="chart chart-polar-area" ' +
                    'chart-data="$ctrl.data" ' +
                    'chart-labels="$ctrl.labels" ' +
                    'chart-legend="$ctrl.legend"></canvas>' +
                '</div>' +
              '</div>',

    controller: ['$http', 'CityDataService',
      function InspectionResultsScatterChartCtrl($http, CityDataService) {
        var self = this;
        self.subtitle = 'Inspection Results';

        setTimeout(function() {
          CityDataService.getCityData($http).success(function(dataObj) {

            var data = [];
            var labels = [];
            var resultsObj = common.buildCountObj(dataObj, 'results');

            // Iterate through resultsObj to create arrays for labels and the count of
            // occurrences of those labels...
            $.each(resultsObj, function(value, key) {
              if(key > 50) {
                labels.push(value);
                data.push(key);
              }
            });

            // Assign new arrays to this for usage with the donut chart
            self.series = ['Series A'];
            self.labels = labels;
            self.data = data;

          }).error(function(err) {
            console.log(err);
          });
        }, 1);
      }
    ]}
  );
