const assert = require('assert');
var isFromPaarl = function(regNum){
  var location = regNum.startsWith('CJ');
  console.log(location);
        return location;
}
assert.equal(isFromPaarl('CJ'), true);
