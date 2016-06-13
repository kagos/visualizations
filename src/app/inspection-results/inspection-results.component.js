'use strict';

angular
  .module('inspectionResults')
  .component('inspectionResults', {
    templateUrl: 'app/inspection-results/inspection-results.template.html',

    controller: ['$http', '$timeout', 'CityDataService',
      function InspectionResultsScatterChartCtrl($http, $timeout, CityDataService) {
        var self = this;

        self.subtitle = 'Inspection Results';

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

          $timeout(function () {
            self.data = data;
          }, 0);

        }).error(function(err) {
          console.log(err);
        });
      }
    ]}
  );
