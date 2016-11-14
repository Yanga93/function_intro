const assert = require('assert');
  var sameWeekday = function(dateStr1, dateStr2){
    var checkWeekday1 = new Date(dateStr1);
      var checkWeekday2 = new Date(dateStr2);
        var results = checkWeekday1.getDay() == checkWeekday2.getDay();
    console.log(results);
      return results;

};
  assert(sameWeekday('2016-11-7', '2014-12-22'), true);
  assert(sameWeekday('2013-11-11', '2010-07-19'), true);
