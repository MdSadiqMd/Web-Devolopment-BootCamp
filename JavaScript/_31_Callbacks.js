// Synchronous Programming as the whole output will print in the order of the Input given 
const readline=require('readline-sync');
let a=readline.question("Input one");
let b=readline.question("Input two");
let c=readline.question("Input three");
console.log(a+" "+b+" "+c);

// Asynchronous Programming beecause as per order the output should be "one two three" but as two delayed the output is "one three two"
console.log("one");
setTimeout(function(){
    console.log("two");
},2000);
console.log("three");