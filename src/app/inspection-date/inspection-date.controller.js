'use strict';

angular
  .module('inspectionDate')
  .controller('InspectionPerDateChartCtrl', ['$timeout', 'CityDataService',
    function($timeout, CityDataService) {
      const _self = this;

      CityDataService.getCityData().success((dataObj) => {
        let _data = [];
        let _dateObj = {};
        let _labels = [];

        $(dataObj).each((_index, _entry) => {
          const _inspectionDate = new Date(_entry.inspection_date);
          const _inspectionMonth = _inspectionDate.getMonth();

          _dateObj.hasOwnProperty(_inspectionMonth) ?
            _dateObj[_inspectionMonth]++ :
            _dateObj[_inspectionMonth] = 1;
        });

        const _sortedObj = common.sortObjProperties(_dateObj, 'month');

        $.each(_sortedObj, (_value, _key) => {
          _data.push(_key);
          _labels.push(common.getMonthName(_value));
        });

        _self.subtitle = 'Inspection Dates';
        _self.description = 'Chicago Food Inspections by Month, from 2010 - 2016';
        _self.labels = _labels;

        $timeout(() => {
          _self.data = [_data];
        }, 0);
      });
    }
  ]
);
