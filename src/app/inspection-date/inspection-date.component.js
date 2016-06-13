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
            var inspectionDate = new Date(entry.inspection_date);
            var inspectionMonth = inspectionDate.getMonth();

            dateObj.hasOwnProperty(inspectionMonth) ?
              dateObj[inspectionMonth]++ :
              dateObj[inspectionMonth] = 1;
          });

          var _obj = common.sortObjProperties(dateObj, 'month');

          $.each(_obj, function(value, key) {
            data.push(key);
            labels.push(common.getMonthName(value));
          });

          self.subtitle = 'Inspection Dates';
          self.description = 'Chicago Food Inspections by Month, from 2010 - 2016';
          self.labels = labels;

          $timeout(function() {
            self.data = [data];
          }, 0);
        });
      }
    ]
  });
