'use strict';

angular
  .module('inspectionResults')
  .component('inspectionResults', {
    templateUrl: 'app/inspection-results/inspection-results.template.html',
    controller: ['$http', '$timeout', 'CityDataService',
      function InspectionResultsChartCtrl($http, $timeout, CityDataService) {
        var self = this;
        var displayLowerLimit = 50;

        CityDataService.getCityData($http).success(function(dataObj) {
          var countObj = common.buildCountObj(dataObj, 'results',
            displayLowerLimit);
          var formattedObj = common.getFormattedObj(countObj, 'abc');

          self.subtitle = 'Inspection Results';
          self.series = ['Series A'];
          self.labels = formattedObj.labels;
          self.description = 'Chicago Food Establishment Inspection Results with ' +
            displayLowerLimit  + ' or more occurrences, from 2010 - 2016';

          $timeout(function () {
            self.data = formattedObj.data;
          }, 0);
        });
      }
    ]}
  );
