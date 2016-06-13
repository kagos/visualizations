'use strict';

angular
  .module('inspectionResults')
  .component('inspectionResults', {
    templateUrl: 'app/inspection-results/inspection-results.template.html',
    controller: ['$http', '$timeout', 'CityDataService',
      function InspectionResultsChartCtrl($http, $timeout, CityDataService) {
        var self = this;

        CityDataService.getCityData($http).success(function(dataObj) {
          var displayLowerLimit = 50;
          var countObj = common.buildCountObj(dataObj, 'results',
            displayLowerLimit);
          var formattedObj = common.getFormattedObj(countObj);

          self.subtitle = 'Inspection Results';
          self.series = ['Series A'];
          self.labels = formattedObj.labels;

          $timeout(function () {
            self.data = formattedObj.data;
          }, 0);
        });
      }
    ]}
  );
