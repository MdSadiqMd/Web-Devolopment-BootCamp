// Spread Operator
// The spread operator allows you to spread the elements of an array or object into another array or object.

// Spreading elements of an array into another array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

console.log("Spread Operator - Arrays:");
console.log("array1:", array1);
console.log("array2:", array2);

// Spreading elements of an object into another object
const object1 = { a: 1, b: 2 };
const object2 = { ...object1, c: 3, d: 4 };

console.log("\nSpread Operator - Objects:");
console.log("object1:", object1);
console.log("object2:", object2);

// Rest Parameter
// The rest parameter allows you to collect multiple function arguments into a single array.

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("\nRest Parameter:");
console.log("Sum of 1, 2, 3, 4, and 5:", sum(1, 2, 3, 4, 5));

// Spread with Rest
// You can also use the spread operator and rest parameter together.

const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;

console.log("\nSpread with Rest:");
console.log("First number:", first);
console.log("Rest of the numbers:", rest);
