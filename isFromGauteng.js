const assert = require('assert');
var isFromGauteng = function(regNum){
  var location = regNum.endsWith('GP');
      console.log(location);
        return location;
}
  assert.equal(isFromGauteng('GP'), true);
