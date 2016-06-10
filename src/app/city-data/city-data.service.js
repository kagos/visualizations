'use strict';

angular.
  module('cityData').
  factory('CityData', ['$resource',
    function($resource) {
      return $resource('https://data.cityofchicago.org/resource/cwig-ma7x.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
