const assert = require('assert');
var dayToday = function day(dateStr){
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var today = new Date(dateStr);

  var results = weekDays[today.getDay()];
  console.log(results);
  return results;
};
assert.equal(dayToday('2016-11-15'), 'Tuesday');
assert.equal(dayToday('2016-11-18'), 'Friday');
