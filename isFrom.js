 const assert = require('assert');
var isFrom = function(regNum, location){
  var myRegNum = regNum.startsWith(location);
    console.log(myRegNum);
      return myRegNum;
};
assert.equal(isFrom('CJ 98912', 'CJ'), true);
