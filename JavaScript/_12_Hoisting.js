// *** See the How Javascript Works Video 

/*var a=7;
console.log(a); // output : 7

function getName(){
    console.log("Hello World");
}
getName(); // output: Hello World
console.log(getName) // output : [Function: getName]*/


/*getName(); // output: Hello World
console.log(getName) // output : [Function: getName]
console.log(a); // output : Undefined
var a=7;
function getName(){
    console.log("Hello World");
}*/


// Incase of Arrow Function
getName(); // output : Error --> as here the getName function acts as variable and you're calling it as a function 
console.log(getName) // output : Error --> as getNme function acts as a variable
var getName=()=>{
    console.log("Hello World");
}

