/*
In JavaScript, a constructor is a special method used for creating and initializing objects. Constructors are typically defined as functions and are used with the new keyword to create new instances of objects based on a specific blueprint or template. They allow you to set initial properties and perform any necessary setup when creating new objects

In this example, the Person function acts as a constructor. It takes two parameters, name and age, which are used to initialize the properties of the created objects. Inside the constructor, the properties name and age are assigned to the this object, which refers to the instance being created.

Additionally, a greet method is defined within the constructor. This method is associated with each instance of the Person object and can be called to print a greeting that includes the person's name and age.

When you create instances of the Person object using the new keyword (e.g., new Person("Alice", 30)), the constructor is invoked. It creates a new object, sets its properties based on the provided arguments, and assigns the methods defined in the constructor to the instance. This way, you can create multiple instances of the same type of object with different property values and methods
*/

// Define a constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Create instances of Person using the constructor
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
  // Call the greet method on the instances
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
  