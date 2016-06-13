var common = {
  buildCountObj: function(dataObj, property) {
    var _obj = {};

    $(dataObj).each(function(index, entry) {
      if(entry[property]) {
        _obj.hasOwnProperty(entry[property]) ?
          _obj[entry[property]]++ :
          _obj[entry[property]] = 1;
      }
    });

    return _obj;
  },

  getFormattedObj: function(countObj) {
    var labels = [];
    var data = [];

    $.each(countObj, function(value, key) {
      labels.push(value);
      data.push(key);
    });

    return {
      labels: labels,
      data: data
    }
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
  }
};
