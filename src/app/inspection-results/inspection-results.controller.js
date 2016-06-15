'use strict';

angular
  .module('inspectionResults')
  .controller('InspectionResultsChartCtrl', ['$timeout', 'CityDataService',
    function($timeout, CityDataService) {
      const _displayLowerLimit = 50;
      const _self = this;
      
      CityDataService.getCityData().success((dataObj) => {
        const _countObj = common.buildCountObj(dataObj, 'results',
          _displayLowerLimit);
        const _sortedObj = common.sortObjProperties(_countObj);
        const _formattedObj = common.getFormattedObj(_sortedObj);

        _self.subtitle = 'Inspection Results';
        _self.series = ['Series A'];
        _self.labels = _formattedObj.labels;
        _self.description = 'Chicago Food Establishment Inspection Results with ' +
          _displayLowerLimit  + ' or more occurrences, from 2010 - 2016';

        $timeout(() => {
          _self.data = _formattedObj.data;
        }, 0);
      }
    );
  }
]);
