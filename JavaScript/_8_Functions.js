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

// Nested Function
function f1() {
    console.log("Hello");
    function f2() {
        console.log("World");
    }
    return f2;
}

f1();    // This will log "Hello" only
f1()();  // (or) f2(); // This will log "Hello" followed by "World"


// Arrow Function --> Prefer this over upper one
const func=()=>{
    console.log("Sadiq");
}
func(); 