// Consider a Function which have three parameters each coming from a different API 
/*function add(a,b,c) {
    console.log(a+b+c);
}
add(1,2,3);*/

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