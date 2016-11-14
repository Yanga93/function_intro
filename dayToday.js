const assert = require('assert');
var dayToday = function day(){
  var today = new Date();
    var results = today.getDay();
      console.log(results);
        return results;
};
  assert.equal(dayToday(), 1);
