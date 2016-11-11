const assert = require('assert');
var isFromCapeTown = function(regNum){
  var location = regNum.startsWith('CA');
      console.log(location);
        return location;
}
assert.equal(isFromCapeTown('CA'), true);
