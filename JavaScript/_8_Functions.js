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


// Arrow Function 
// There are three types of Arrow Functions
// 1.Basic Arrow Functions
var a=()=>{}
// 2.Fat Arrow Functions
var b=(parameter)=>{}
// 3.Fat Arrow Function with Implicit Return
var c=()=>122;
console.log(c()); // Prints 122

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
  
// Pure and Impure Functions 
// Pure Function is which satisfy these two Conditions
// 1. It should return same output for every same input
// 2. It will never change or update global Variable
var global=12;
function abcd(a) {
    global=13; // This changes the value of global function so it's an Impure Function
    return Math.random();
}
var result=abcd(a); // This function called with same argumetns but give different output so Impure Function
var result1=abcd(a);
