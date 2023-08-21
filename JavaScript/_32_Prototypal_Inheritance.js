// Prototype --> When we create an object, JavaScript attaches a hidden set of methods that are applied to the type of object.

let arr = ["Allah", "Sadiq"];

let object = {
    name: "Sadiq",
    city: "Vijayawada",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

// This is called the Prototype Chain --> This narrows down and proves that everything in JavaScript is an object.

console.log(arr.__proto__); // Object(0) []
console.log(arr.__proto__.__proto__); // [Object: null prototype] {}
console.log(arr.__proto__.__proto__.__proto__); // null
