const assert = require('assert');
var isFromLimpopo = function(regNum){
  var location = regNum.endsWith('L');
      console.log(location);
        return location;
}
  assert.equal(isFromLimpopo('L'), true);
