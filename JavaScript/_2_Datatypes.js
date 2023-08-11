//Primitive Datatypes
console.log("Primitive Datatypes");
let a=4;
let b="sadiq";
let c=null;
let d=true;
let e=BigInt("567")+BigInt("3");
let f=undefined; // (or) let f 
let g=Symbol("Symbol");
console.log(a,b,c,d,e,f,g);

//Objects in JS (or) Non-primitive Datatypes
console.log("Non-primitive Datatypes");
const item={
    "Harry":true,
    "sadiq":false,
    "Akhil":67,
    "Ravi":undefined
}
console.log(item["Ravi"])