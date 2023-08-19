// Function Statement (or) Function Declaration --> Creating a Function in Below way is Called Function Statement
function func(){
    console.log("Hello World");
}
func();

// Function Expression --> Assignong a Function to the Variable is called Function Expression
var b=function func1(){
    console.log("Hello World");
}
func1();

// *** The Difference Between Function Expression and Function Statement is Hoisting

// Anonymous Function --> The Fucntions Doesn't Having any Name is Anonymous Functions we generally use it when we are assigning function to the Variable
var c=function (){
    console.log("Hello World");
}

// Named Functions --> A named function in JavaScript is a function that is defined with a specific name using the function keyword. It can be referenced by its name for calling or recursion, and it provides a clear identifier for the function's purpose.
var func3 = function() {
    console.log("Hello World ");
    func3(); // Without this line the code block will return error this is called Named Functions
};
func3();  // This will call the recursive function

// ***First Class Functions (or) First Class Cititzens --> The ability of functions to be assigned as parameters in other functions , the Ability of functions to be assigned to variables this all collectively known as first class Functions
