"use strict";

var common = {
  buildCountObj: function(dataObj, property, limit) {
    var _obj = {};

    $(dataObj).each(function(index, entry) {
      if(entry[property]) {
        _obj.hasOwnProperty(entry[property]) ?
          _obj[entry[property]]++ :
          _obj[entry[property]] = 1;
      }
    });

    return limit ?
      common.filterObjectByLowerLimit(_obj, limit) :
      _obj;
  },

  filterObjectByLowerLimit: function(dataObj, limit) {
    for(var thisObj in dataObj) {
      if(dataObj[thisObj] < limit) {
        delete dataObj[thisObj];
      }
    };

    return dataObj;
  },

  getFormattedObj: function(countObj, sortType) {
    var _obj = {
      labels: [],
      data: []
    };

    if(sortType) countObj = common.sortObjProperties(countObj, sortType);

    $.each(countObj, function(value, key) {
      _obj.labels.push(value);
      _obj.data.push(key);
    });

    return _obj;
  },

  getMonthName: function(monthIndex) {
    return common.months[monthIndex];
  },

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

  sortObjProperties: function(dataObj, sortType) {
    var sorted = {};
    var _workingArr = [];

    for (var key in dataObj) {
      if (dataObj.hasOwnProperty(key)) {
        _workingArr.push(key);
      }
    }
    _workingArr.sort();

    $.each(_workingArr, function(key) {
      var thisProp = dataObj[_workingArr[key]];
      if(sortType === 'month') {
        thisProp = common.getMonthName(thisProp);
      }
      sorted[_workingArr[key]] = thisProp;
    });

    return sorted;
  }
};
