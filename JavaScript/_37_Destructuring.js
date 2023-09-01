// Destructuring arrays
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Basic array destructuring
const [firstFruit, secondFruit] = fruits;
console.log(`First fruit: ${firstFruit}`); // Output: First fruit: apple
console.log(`Second fruit: ${secondFruit}`); // Output: Second fruit: banana

// Skipping elements
const [,, thirdFruit] = fruits;
console.log(`Third fruit: ${thirdFruit}`); // Output: Third fruit: cherry

// Rest operator in array destructuring
const [first, ...restOfFruits] = fruits;
console.log(`First fruit: ${first}`); // Output: First fruit: apple
console.log(`Rest of the fruits: ${restOfFruits}`); // Output: Rest of the fruits: banana,cherry,date

// Default values
const [aFruit, bFruit, cFruit, dFruit = 'unknown'] = fruits;
console.log(`D Fruit: ${dFruit}`); // Output: D Fruit: unknown

// Destructuring objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Basic object destructuring
const { firstName, lastName } = person;
console.log(`First Name: ${firstName}`); // Output: First Name: John
console.log(`Last Name: ${lastName}`); // Output: Last Name: Doe

// Aliasing object properties
const { firstName: fName, lastName: lName } = person;
console.log(`First Name: ${fName}`); // Output: First Name: John
console.log(`Last Name: ${lName}`); // Output: Last Name: Doe

// Default values in object destructuring
const { city = 'Unknown' } = person;
console.log(`City: ${city}`); // Output: City: Unknown

// Nested object destructuring
const user = {
  id: 1,
  info: {
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
    },
  },
};

const { info: { email }, info: { address: { city: userCity } } } = user;
console.log(`Email: ${email}`); // Output: Email: john@example.com
console.log(`User's City: ${userCity}`); // Output: User's City: New York
