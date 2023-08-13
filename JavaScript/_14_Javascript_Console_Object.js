console.log(console); // This will list all console . Objects
console.assert(5>10); // Returns assertion failed method .assert() ususally act as Condition boolean check Method
console.clear(); // This clear the console / Terminal
let obj={
    a:1,
    b:2,
    c:3
};
console.table(obj); // This makes the obj data in table representation
console.warn("Just shows Warning");
console.info("The comments should be shown in console");

// The .time and .timeEnd will return the time taken to execute the Lines of code between those methods
console.time("Operation"); 
for(let i=0;i<5;i++){
    console.log(i);
}
console.timeEnd("Operation");