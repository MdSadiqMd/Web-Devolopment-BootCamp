//These below 4 lines and other type of these won't throw any error
//17;
//"String";
//false;
//undefined;

console.log("Arthematic Operators")
let a=10;
let b=5;
console.log(a+b); 
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);
console.log(a++); // a++ makes increment but ***not print the output at the same time but stores the increment value
console.log(++a); // ++a makes increment and print the output at the same time time
console.log(a);
console.log(a--);

console.log("Assignment Operators")
let assignment=5;
assignment+=5;
console.log(assignment);

console.log("Comparision Operators")
let comp1=6;
let comp2=4;
console.log(comp1>comp2);
console.log(comp1<comp2);
console.log(comp1==comp2);//if 6=="6" --> True
console.log(comp1===comp2);//if 6==="6" --> false
console.log(comp1!=comp2);
console.log(comp1!==comp2);

console.log("Logical Operators")
console.log(6>5 && 5<4);
console.log(5<6 || 5==5)