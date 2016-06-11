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
}
