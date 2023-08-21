var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=20;
    console.log(x);
}

// Nested Function
function f1() {
    console.log("Hello");
    function f2() {
        console.log("World");
    }
    return f2;
}

f1();    // This will log "Hello" only
f1()();  // (or) f2(); // This will log "Hello" followed by "World"


// Arrow Function --> Prefer this over upper one
const func=()=>{
    console.log("Sadiq");
}
func(); 

// iife --> Immediately invoked function Execution
// Here this is used to create private Variables in the functions which can only accessed inside the function using getter and only manipulated inside the function using setter
// Difference between const and iife is const variable can be accessed any where in the code
var ans = (function() {
    var privateval = 12;
    return {
      setter: function() {
        privateval = 13;
      },
      getter: function() {
        console.log(privateval);
      }
    };
})();
  