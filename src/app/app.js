var visualApp = angular.module('visualApp', ['chart.js']);

visualApp
  .service('CityDataService', ['$http',
    function($http) {
      var getCityData = function($http) {
        return $http.get('https://data.cityofchicago.org/resource/cwig-ma7x.json');
      };

      return {
        getCityData: getCityData
      };
  }])
  .controller('CityDataCtrl', ['$http', 'CityDataService',
    function($http, CityDataService) {
      CityDataService.getCityData($http).success(function(data) {
        $scope.rawData = data;
      }).error(function(err) {
        console.log(err);
      });
    }
  ])
  .controller('RiskLevelDonutChartCtrl', ['$scope', '$http', 'CityDataService',
    function($scope, $http, CityDataService) {
      CityDataService.getCityData($http).success(function(dataObj) {
        $scope.title = 'Chicago Establishments';
        $scope.subtitle = 'Risk Levels';

        var data = [];
        var labels = [];
        var riskObj = {};

        // Use cityData to build an object with key-value pairs of labels and
        // count of label occurrences within the dataset
        $(dataObj).each(function(index, entry) {
          if(entry.risk) {
            riskObj.hasOwnProperty(entry.risk) ?
              riskObj[entry.risk]++ :
              riskObj[entry.risk] = 1;
          }
        });

        // Iterate through riskObj to create arrays for labels and the count of
        // occurrences of those labels...
        $.each(riskObj, function(value, key) {
          labels.push(value);
          data.push(key);
        });

        // Assign new arrays to $scope for usage with the donut chart
        $scope.labels = labels;
        $scope.data = data;

      }).error(function(err) {
        console.log(err);
      });
    }
  ])
  .controller('InspectionPerDateLineChartCtrl', ['$scope', '$http', 'CityDataService',
    function($scope, $http, CityDataService) {
      CityDataService.getCityData($http).success(function(dataObj) {
        $scope.title = 'Chicago Establishments';
        $scope.subtitle = 'Inspection Dates';

        var data = [];
        var labels = [];
        var dateObj = {};

        // Use cityData to build an object with key-value pairs of labels and
        // count of label occurrences within the dataset
        $(dataObj).each(function(index, entry) {
          if(entry.inspection_date) {
            var inspectionDate = new Date(entry.inspection_date);
            var inspectionMonth = inspectionDate.getMonth() + 1;

            dateObj.hasOwnProperty(inspectionMonth) ?
              dateObj[inspectionMonth]++ :
              dateObj[inspectionMonth] = 1;
          }
        });

        // Iterate through dateObj to create arrays for labels and the count of
        // occurrences of those labels...
        $.each(dateObj, function(value, key) {
          labels.push(value);
          data.push(key);
        });

        // Assign new arrays to $scope for usage with the line chart
        $scope.series = ["Series 1"];
        $scope.labels = labels;
        $scope.data = [data];
        $scope.onClick = function (points, evt) {

        };

      }).error(function(err) {
        console.log(err);
      });
    }
  ]);
