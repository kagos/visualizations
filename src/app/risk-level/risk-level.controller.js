'use strict';

angular
  .module('riskLevel')
  .controller('RiskLevelChartCtrl', ['CityDataService',
    function(CityDataService) {
      const _self = this;
      
      CityDataService.getCityData().success((dataObj) => {
        const _countObj = common.buildCountObj(dataObj, 'risk');
        const _sortedObj = common.sortObjProperties(_countObj);
        const _formattedObj = common.getFormattedObj(_sortedObj);

        _self.subtitle = 'Establishment Risk Levels';
        _self.description = 'Chicago Food Inspections Inspected Establishments '
          + 'by Risk Level, from 2010 - 2016';
        _self.labels = _formattedObj.labels;
        _self.data = _formattedObj.data;
      });
    }
  ]
);
