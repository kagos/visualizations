'use strict';

angular
  .module('inspectionDate')
  .component('inspectionDate', {
    template: '<div class="col-md-12 outer-chart-container">' +
                '<h2>{{ $ctrl.subtitle }}</h2>' +
                '<div class="chart-container">' +
                  '<canvas class="chart chart-line" ' +
                    'chart-data="$ctrl.data" ' +
                    'chart-labels="$ctrl.labels" ' +
                    'chart-series="$ctrl.series"></canvas>' +
                '</div>' +
              '</div>',

    controller: ['$http', 'CityDataService',
      function InspectionPerDateLineChartCtrl($http, CityDataService) {
        var self = this;

        CityDataService.getCityData($http).success(function(dataObj) {
          self.subtitle = 'Inspection Dates';

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
          self.data = [data];

        }).error(function(err) {
          console.log(err);
        });
      }
    ]
  });
