// Consider two functions add and square 
function add(a, b) {
    return a + b;
}
function square(...args) {
    return args[0]*args[1];
}

// Suppose we need to run the add and square functions sequentially on the same values
function addAndMul(a, b) {
    return square(add(a + b));
}

// This is ok for two functions 
// Suppose if there are a lot of functions which need to be performed in a sequential way, we use Composition
// Composition is a bundled function which will implement any number of functions
function compose(...fns) {
    return function(...value) {
        return fns.reduce((a, b) => b(a), ...value);
    };
}

console.log(compose(square,add)(2,3)); 
