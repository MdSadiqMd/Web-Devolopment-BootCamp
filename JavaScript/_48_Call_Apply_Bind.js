let name={
    firstName:"A",
    lastName:"B"
};
let name1={
    firstName:"E",
    lastName:"F"
};
let printFullName=function(place,state){
    console.log(this.firstName+" "+this.lastName+" "+place+" "+state);
};
// Call Method --> Here we are using call method to call the method to perform similar task on different Functions
printFullName.call(name,"C","D"); 
printFullName.call(name1,"G","H");
// Apply method --> The Difference between Apply and call is the way we give the arguments in Apply we give arguments in the form of a list
//              --> Advantage : We can access the Arguments via Indexes
printFullName.apply(name,["C","D"]);
printFullName.apply(name1,["G","H"]);
// Bind Method --> It Returns the Copy of the Method which can be Invoked Later
let printName=printFullName.bind(name1,"C","D"); // This copies the arguments in printFullName Method in the form of Function
console.log(printName); // Invoked Function
printName(); // Returns the Function Invoked Value

// *** Polyfill for Bind (Creating Own Bind Method)
Function.prototype.mybind=function(...args){ // Used Prototypal Inheritance to inherit Function that can be used later on
    let obj=this,
    params=args.slice(1); // Sliced first item in args as the first is "name" that we need to give manually
    return function (args1) {
        obj.apply(args[0],[...params,...args1]); // Used apply() as need to give multiple arguments
    }
}
let printName1=printFullName.mybind(name,"C");
printName1("D"); 