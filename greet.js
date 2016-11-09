const assert = require('assert');
  var greet = function(name){
    console.log('hello' + ' ' +  name);
    return 'hello' + ' ' + name;
      }
  assert.equal(greet('Mandisi'), 'hello Mandisi');
