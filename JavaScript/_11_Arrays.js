// Array is not an Array it is an "Object"
let a=[1,2,3,4,];
// But Javascript saves it like 
let a1={
    0:1,
    1:2,
    2:3,
    3:4
};
// we dont have negetive index in "a" array but if we keep negetive index in the Array then we can see the real form of the array
a[-1]=2; // THis proves that the array is an "object" in javascript
console.log(typeof(a)); // Double confirmation that array is an "Object"
console.log(a);
console.log(a1);


const readline = require("readline-sync");
let array=[];
for(let i=0;i<4;i++){
    let value=readline.question(`Enter Index ${i} : `);
    array.push(value);
}
console.log(array); 

let array1=[1,2.34,"sadiq",undefined,true];
console.log(array1);

// Using for Loop
for(let i=0;i<array1.length;i++){
    console.log(i);
}

// ***Using for each Loop
array1.forEach((Element) => {
    console.log(Element);
});

// Using For in loop
for (let a in array1){
    console.log(array1[a]);
}

// Array.from --> This Converts HTML Collection to Array
let name="sadiq";
let arr=Array.from(name);
console.log(arr);

let array2=[1,2,3,4,5];
console.log(array2.toString());

// Join Method
console.log(array2.join(" and "));

// pop --> Return the Last Element
console.log(array2.pop());
console.log(array2);

// push --> Add Element to the Last
console.log(array2.push(6));
console.log(array2);

// shift --> Remove Element at Index 0 
console.log(array2.shift(3));
console.log(array2)

// Unshift --> Adds Element at Index 0
console.log(array2.unshift(5));
console.log(array2);

// Delete Element 
delete array2[0]; // *** This Deletes the Element but keep the Array Size Same
console.log(array2);

// sort() --> This will Sort aphabetically not based on value and this changes the Original Array
array3=[1,2,200,3,5,400,8,60];
console.log(array3.sort()); // output: [1, 2, 200, 3, 400, 5, 60, 8]

// Sorting Using Compare Function (Descending Order)
let compare=(a,b)=>{
    return b-a;
}
console.log(array3.sort(compare));

// Reversing the Array
console.log(array3.reverse());

// ***Splice(start index,Number of Elements to be Deleted,*The Elements to be Added)
console.log(array3);
array3.splice(2,3,85,86,87);
console.log(array3);

// Slice 
console.log(array3.slice(3,5));