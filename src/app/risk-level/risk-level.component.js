'use strict';

angular
  .module('riskLevel')
  .component('riskLevel', {
    templateUrl: 'app/risk-level/risk-level.template.html',

    controller: ['$http', 'CityDataService',
      function RiskLevelDonutChartCtrl($http, CityDataService) {
        var self = this;
        
        self.subtitle = 'Establishment Risk Levels';

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
      }
    ]}
  );
