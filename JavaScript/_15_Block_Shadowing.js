// Block (or) Compound Statement --> It is used to combine multiple javascript statements where one Statement is expected
//                                   ex : In if statement if we write only one statement then no need to keep {} but for multiple statements we need to keep {}
/*{
    var a=10;
    let b=20;
    const c=30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(a); // 10
console.log(b); // error --> as block scoped
console.log(c); // error --> as block scoped*/

// Shadowing
var a=100;
let b=200;
const c=300;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(a); // 10 --> Block var shadows global variable var
console.log(b); // 200 --> global let shadows block let
console.log(c); // 300 --> global const shadows block const
// Note : Same as in case of Function and Arrow Function

// Illegal Shadowing

//This is Illegal shadowing we cannot scope let using var
let a=20;
{
    var a=20; 
}

//This is *** not Illegal shadowing we can scope var using let
var a=20;
{
    let a=20; 
}

