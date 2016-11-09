const assert = require('assert');
  var greet = function(){
console.log("Hello Yanga");
}
greet();
assert.equal(greet('Yanga'), 'Hello, Yanga');
