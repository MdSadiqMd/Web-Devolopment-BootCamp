const readline = require("readline-sync");

let a = 25;

function guess(num1, num2, count, userGuess) {
    if (num1 < num2) {
        console.log("The Correct number is less than the Given Number");
        count--;
        userGuess = parseInt(readline.question("Enter your Number : "));
        guess(num1, num2, count, userGuess);
    } else if (num2 > num1) {
        console.log("The Correct number is more than the Given Number");
        count--;
        userGuess = parseInt(readline.question("Enter your Number : "));
        guess(num1, num2, count, userGuess);
    } else {
        console.log("Your Score is " + count);
    }
}

let num1 = 1; // Adjust the range start value as needed
let num2 = 100; // Adjust the range end value as needed
let count = 99; // Initial score
let userGuess = parseInt(readline.question("Enter your Number : "));

guess(a, userGuess, count, userGuess);
