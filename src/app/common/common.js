"use strict";

const common = {
  buildCountObj: (dataObj, property, limit) => {
    let _countedObj = {};

    $(dataObj).each((index, entry) => {
      const _objProp = entry[property];
      if(_objProp) {
        _countedObj.hasOwnProperty(_objProp) ?
          _countedObj[_objProp]++ :
          _countedObj[_objProp] = 1;
      }
    });

    return limit ?
      common.filterObjectByLowerLimit(_countedObj, limit) :
      _countedObj;
  },

  filterObjectByLowerLimit: (dataObj, limit) => {
    for(let _objProp in dataObj) {
      if(dataObj[_objProp] < limit) {
        delete dataObj[_objProp];
      }
    };

    return dataObj;
  },

  getFormattedObj: (countObj, sortType) => {
    let _formattedObj = {
      labels: [],
      data: []
    };

    $.each(countObj, (_value, _key) => {
      _formattedObj.labels.push(_value);
      _formattedObj.data.push(_key);
    });

    return _formattedObj;
  },

  getMonthName: (monthIndex) => common.months[monthIndex],

  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  sortObjProperties: (dataObj, sortType) => {
    let _sortedObj = {};
    let _workingArr = [];

    for (let _key in dataObj) {
      if (dataObj.hasOwnProperty(_key)) {
        _workingArr.push(_key);
      }
    }
    _workingArr.sort();

    $.each(_workingArr, (_key) => {
      _sortedObj[_workingArr[_key]] = dataObj[_workingArr[_key]];
    });

    return _sortedObj;
  }
};
