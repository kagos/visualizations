'use strict';

angular
  .module('inspectionDate')
  .component('inspectionDate', {
    templateUrl: 'app/inspection-date/inspection-date.template.html',

    controller: ['$http', '$timeout', 'CityDataService',
      function InspectionPerDateLineChartCtrl($http, $timeout, CityDataService) {
        var self = this;

        self.subtitle = 'Inspection Dates';

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

          // Iterate through dateObj to create arrays for labels and the count of
          // occurrences of those labels...
          $.each(dateObj, function(value, key) {
            data.push(key);
          });

          // Assign new arrays to self for usage with the line chart
          self.labels = common.getMonthName();

          $timeout(function() {
            self.data = [data];
          }, 0);

        }).error(function(err) {
          console.log(err);
        });
      }
    ]
  });
