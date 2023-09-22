let a="47abc";
// we can use type of as a keyword and also as a method
console.log(typeof a);
console.log(typeof(a));

let valueInNumber=Number(a);
console.log(a); 
console.log(valueInNumber); // The chnages string to number whuch is not number is NaN type
                            // If you take a=undefined the output will be same
console.log(typeof valueInNumber) // But it is taken in as a "number" ***so be careful it is not actually number

let b="-1";
let isBoolean=Boolean(b);
console.log(isBoolean);

console.log(+true); // 1 --> it changes true to int
console.log(+""); // 0 --> changes from ""--> false --> 0

let c="1"+2+3;
//let c=1+2+"3";
console.log(c);
console.log(typeof c);

// Test Cases
// ___ to Integer 
// "47" => 47 (integer)
// "47abc" => NaN (integer) where the NaN means not an number 
// "abc" => NaN (integer) 
// "true" => NaN (integer) 

// ___ to boolean 
// "123" (any number other than zero even if it is negetive) => true
// "abc" => true
// "" => false

// ___ to string 
// "1"+2+3 => 123
// 1+2+"3" => 33