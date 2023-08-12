function sum(a,b){
    return Math.round(a/b);
}
let a=1;
let b=2;
let c=3;
console.log(sum(a,b));
console.log(sum(b,c));
console.log(sum(c,a));

// Arrow Function --> Prefer this over upper one
const func=()=>{
    console.log("Sadiq");
}
func(); 