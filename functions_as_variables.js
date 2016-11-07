var funcOne = function(){
  console.log('funcOne! ');
};

var execFunc = function(f){
  f();
};

execFunc(funcOne);
