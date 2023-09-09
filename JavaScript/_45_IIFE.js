// IIFE --> Immediately Invoked Function Expression --> It runs as soon the Function is defined
(function add(a,b){
    console.log(a+b);
})(2,3);
// Here we return the function Invoked Immediately

// In ES6
const ans=((a,b) =>a+b)(2,3);
console.log(ans);
//(or)
((a,b) =>console.log(a+b))(2,3);

// Advantages:
// No need to create Global Variable when only the variable is used in a Function
// IIFE is used to create Private and Public Variables