const assert = require('assert');
  var greet = function(){
    //display hello Yanga
console.log("Hello Yanga");
}
greet();
assert.equal(greet('Yanga'), 'Hello, Yanga');
