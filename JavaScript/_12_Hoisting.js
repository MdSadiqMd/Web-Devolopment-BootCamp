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

// Temporial Dead Zone Means the Time Between the let variable Created and the Value allocation to let Variable
// Interview Question: Do let and const are Hoisted or not ? --> Expalin about temporial dead zone and ways to avoid it
// To avoid Temporial Dead Zones Keep your Declaration on the Top Probably Known as "Shrinking the Tempoial Dead Zone to Zero"

// Incase of Arrow Function
getName(); // output : Error --> as here the getName function acts as variable and you're calling it as a function 
console.log(getName) // output : Error --> as getNme function acts as a variable
var getName=()=>{
    console.log("Hello World");
}

