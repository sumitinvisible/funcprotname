function a(fn){

  alert(fn.name);
}


function b(){


}

a(b);

var func1 = function c() {}
  
var object = {
  func2: function() {}
}

console.log(func1.name);
// expected output: "c"

console.log(object.func2.name);
// expected output: "func2"
