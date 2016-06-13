'use strict';

angular
  .module('riskLevel')
  .component('riskLevel', {
    templateUrl: 'app/risk-level/risk-level.template.html',
    controller: ['$http', 'CityDataService',
      function RiskLevelChartCtrl($http, CityDataService) {
        var self = this;

        CityDataService.getCityData($http).success(function(dataObj) {
          var countObj = common.buildCountObj(dataObj, 'risk');
          var formattedObj = common.getFormattedObj(countObj, true);

          self.subtitle = 'Establishment Risk Levels';
          self.description = 'Chicago Food Inspections Inspected Establishments by Risk Level, from 2010 - 2016';
          self.labels = formattedObj.labels;
          self.data = formattedObj.data;
        });
      }
    ]}
  );
