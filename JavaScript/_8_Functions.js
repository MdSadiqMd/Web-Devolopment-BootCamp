var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=20;
    console.log(x);
}

// Arrow Function --> Prefer this over upper one
const func=()=>{
    console.log("Sadiq");
}
func(); 