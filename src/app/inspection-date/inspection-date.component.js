'use strict';

angular
  .module('inspectionDate')
  .component('inspectionDate', {
    templateUrl: 'app/inspection-date/inspection-date.template.html',
    controller: ['$http', '$timeout', 'CityDataService',
      function InspectionPerDateChartCtrl($http, $timeout, CityDataService) {
        var self = this;
        CityDataService.getCityData($http).success(function(dataObj) {
          var data = [];
          var labels = [];
          var dateObj = {};

          $(dataObj).each(function(index, entry) {
            if(entry.inspection_date) {
              var inspectionDate = new Date(entry.inspection_date);
              var inspectionMonth = common.getMonthName(inspectionDate.getMonth());

              dateObj.hasOwnProperty(inspectionMonth) ?
                dateObj[inspectionMonth]++ :
                dateObj[inspectionMonth] = 1;
            }
          });

          $.each(dateObj, function(value, key) {
            data.push(key);
          });

          self.subtitle = 'Inspection Dates';
          self.labels = common.getMonthName();

          $timeout(function() {
            self.data = [data];
          }, 0);
        });
      }
    ]
  });
