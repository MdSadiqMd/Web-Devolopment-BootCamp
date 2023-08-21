// Truthy vs Falsy
// Falsy --> 0 ,false ,undefined ,null ,NaN(Not a Number) ,document.all 
//       --> These values are called falsy values means when you convert them these will always convert into "false"
// Other than these other all are truthy which returns true

if(7){ // 7 is truthy means it refers to true
    console.log("Hello");
} else {
    console.log("World");
}

// User Input in JavaScript

//If we Use the Code in browser
//let a = prompt("Enter your age"); // This will default consider Input in String Format

//In case of Executing in IDE Specific Import readline Package
const readline = require('readline-sync');

let a = readline.question("Enter your age: ");
console.log(typeof a); // Output the data type of 'a' (should be 'string')
a = Number.parseInt(a); // Convert 'a' from string to integer using parseInt()
console.log(typeof a); // Output the data type of 'a' (should be 'number')

//For Conditional Statements

//for Browser Use alert

/*if(a==5){
    alert("fvjndojnb");
}
else if(a<5){
    alert("dnbjndo");
}
else{
    alert("fjngiendbo");
}*/

//In case of Executing in IDE 

if(a==5){
    console.log("jnrgoneob");
}
else if(a>5){
    console.log("joardngoen");
}
else{
    console.log("jdbojtdno");
}

//Using Termenary Operator 
console.log((a>5)?"yes":"no");