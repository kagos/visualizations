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

  getFormattedObj: function(countObj, sortByProp) {
    var _obj = {
      labels: [],
      data: []
    };

    if(sortByProp) countObj = common.sortObjPropertiesAlphabetically(countObj);

    $.each(countObj, function(value, key) {
      _obj.labels.push(value);
      _obj.data.push(key);
    });

    return _obj;
  },

  getMonthName: function(monthIndex) {
    var months = [
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
    ];

    return (monthIndex) ?
      months[monthIndex] :
      months;
  },

  sortObjPropertiesAlphabetically: function(dataObj) {
    var sorted = {};
    var _workingArr = [];

    for (var key in dataObj) {
      if (dataObj.hasOwnProperty(key)) {
        _workingArr.push(key);
      }
    }
    _workingArr.sort();

    $.each(_workingArr, function(key) {
      sorted[_workingArr[key]] = dataObj[_workingArr[key]];
    });

    return sorted;
  }
};
