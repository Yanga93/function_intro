const assert = require('assert');
var isTuesday = function(day){
  var isDay = day.startsWith('Tue');
  console.log(isDay);
  return isDay;
};
assert.equal(isTuesday('Tue'), true);
