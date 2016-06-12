"use strict";

angular
  .module('cityData')
  .factory('CityDataService', ['$http',
    function($http) {
      var getCityData = function($http) {
        return $http.get('https://data.cityofchicago.org/resource/cwig-ma7x.json',
        {cache: true});
      };

      return {
        getCityData: getCityData
      };
  }]);
