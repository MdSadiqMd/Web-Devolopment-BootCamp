// Consider a Function which have three parameters each coming from a different API 
/*function add(a,b,c) {
    console.log(a+b+c);
}
add(1,2,3);*/

// Currying Using Clousures
// Here if suppose an API is not returning the data then the function sill return error (or) not work (or) will only give a+b
// Here we use Currying which ensures that only after three parameters recieving the answer should be printed
function add(a) {
    return function (b) {
        return function (c) {
            console.log(a+b+c);
        }
    }
}
console.log(add(1)(2)(3)); // we give each parameter as function input

//(or) using Arrow Functions we can write it as
//const add=(a)=>(b)=>(c)=>a+b+c;
//console.log(add(2)(3)(4));

// Currying Using Bind Method
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            // If we have enough arguments, execute the original function
            return fn(...args);
        } else {
            // If not, return a new function that partially applies the arguments
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}
// Currying the 'add' function
const curriedAdd = curry(add);
// Partially applying arguments using the curried function
const addOne = curriedAdd(1);
const addTwo = addOne(2);
const result = addTwo(3);
console.log(result); // Output: 6