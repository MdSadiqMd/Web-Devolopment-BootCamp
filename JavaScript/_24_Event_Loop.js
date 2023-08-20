// Heirarchial Representation
// Browser --> JS Engine ( Firefox - SpiderMonkey , Chrome - V8 ,...) --> Call Stack
// Call stack is the place where the global Execution context is created when we run the program and this is what runs the program
// Browser has Tools like timer,Location fetching,DOM,Local Storage,...
// *** Set Timeout ( as call stack not wait to execute we use browser to stop exection method set time out to stop execution of program), DOM API's (document . ____),fetch(),console.log(),Location,Local Storage are not the part of Javascript they belong to Respective Browser
// To Access the Browser tools we use window Keyword (window.setTimeout(),window.docunent.___,....)
// *** But till now we used settime out and console.log() and other things without window.__ it's because the window is global object we can access it without it's name but giving it is a good convention

// Event Loop --> It's Only Job is to monitor the call stack and call back Queue 
//                When ever the call stack is empty and A function present in call back Queue push the function in Call stack

// MicroTask Queue --> The Queue which has higher priority than Callback Queue the Call back functions which comes to promisesnd Mutable Observers will go in this microtask Queue

// Starvation in Call Back --> Until and Unless all the functions in Microtask Queue get's Executed the callback Queue Functions will not Get Executed
//                         --> Suppose the Microtask Queue Will call an another Microtask then it will increase the time of execution of the call bak Queue as that Newly created Microtask Queue Should be Executed this is called call back Starvation


// ***** Working of Browser tools in JS 
// Example -1 :SetTimer() 
// Initial Line Console.log("Start") the statement will be logged into console and print it
// When Program runs the JS finds the SetTimer() Function in between execution and move it in seperate in ***Web API Environment and wait until it's delay time completes 
// Later, it after completing the delay time the callback() Function (setTimeout()) will be pushed into Call back Queue and "Event Loop" sees if there anything in Callback Queue 
// As Callback() Function SetTime out is present it pushes it into call Stack and Execute it and in execution the code in callback() Function is logged into console and Printed
// Last Line Console.log("End") the statement will be logged into console and print it
console.log("Start");
setTimeout(function cb(){
    console.log("call back Function");
},5000);
console.log("End");

// Example -2:addEventListener
// Initial Line Console.log("Start") the statement will be logged into console and print it
// When Program runs the JS Engine will see the document.___ and recognize it as an call back function and move it to the Web API Environment 
// As there is EvenListener attached to it. JS ENgine attaches and Event "click" to the call back function in Web API Environment
// When the Event "Click" takes place the call back function will be pushed in Callback Queue and Event loop finds the function and push the cb() in call stack and cb() get's Executed
// Last Line Console.log("End") the statement will be logged into console and print it
console.log("Start");
document.getElementById("btn").addEventListener("click",function cb(){
    console.log("call back Function");
});
console.log("End");

// *****Example -3:fetch() --> Used to fetch data from API's
// Initial Line Console.log("Start") the statement will be logged into console and print it
// The JS Engine push cbT() and cbF() in Web API Environment
// Now when the timer expires the cbT() will pushed in call back Queue and after fetching cbF() is pushed into the ***Microtask Queue 
// After Below lines of execution of Code when "End" Prints the Event Loop checks Call stack is Empty and Push ***Microtask Queue in the call stack as it has More preference and later Callback Queue
// Last Line Console.log("End") the statement will be logged into console and print it
console.log("Start");
setTimeout(function cbT(){
    console.log("SetTime Out");
},5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log("Call Back Netflix");
});
// some Large n lines of code ...
console.log("End");
