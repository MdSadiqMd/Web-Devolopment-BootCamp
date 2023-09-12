const Employee = {
    id: "47",
    name: "Sadiq",
    address: {
        city: "Vijayawada"
    }
};

// To access the properties of Employee directly:
console.log(Employee.id);
console.log(Employee.address.city);

// To access the properties using a destructured variable:
const { address: a } = Employee;
console.log(a.city); // Now, you can access the city property using "a"
