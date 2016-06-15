"use strict";

angular.module('visualApp')
  .factory('CityDataService', ['$http',
    function($http) {
      const getCityData = () =>
        $http.get('https://data.cityofchicago.org/resource/cwig-ma7x.json',
          {cache: true});

      return {
        getCityData: getCityData
      };
  }]);
