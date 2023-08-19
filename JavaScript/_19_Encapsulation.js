// Here we Secure the private data (Variable,Function)

// Our Aim is to create a counter function in with count variable is protected and can only access the varible only with a specific function ( Function access with only with specific people)
function counter() {
    var count=0;
    return function increment(){
        count++;
        console.log(count);
    }
}

console.log("Counter 1")
var counter1=counter();
counter1();
counter1();

// When we create an another function with same functionality then it count freshly
console.log("Counter 2")
var counter2=counter();
counter2();
counter2();
counter2();
counter2();
counter2();