// async always return a promise
/*async function getData() { // If we not return a Promise the JS will wrap the returned Object into a promise and return it
                           // If we return a promise it will return the promise itself but ***not wrap that promise in another promise
    return "Sadiq";
}
const data=getData();
console.log(data); // Promise { 'Sadiq' }
// For Converting the promise into the value we use then keyword
data.then((res)=> console.log(res)); // This line will return the res when result is encountered */

/*const p=new Promise((resolve,reject)=>{
    resolve("Promise Resolved");
});
// Without async Function
function getData() {
    p.then((res)=>console.log(res));
}
getData();
// With async Function
async function AgetData(){
    const val=await p; // await is a keyword which can be only be used inside a async function and written before a promise which to be resolved
    console.log(val);
}
AgetData();*/


/*const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 5000);
});*/
// Stopping the Execution of Promise
// Without async Function
/*function getData() {
    p.then((res)=>console.log(res));
    console.log("Without async Function"); //Without async Function (after 5sec )
                                           // Promise Resolved
}
getData();
async function AgetData(){
    const val=await p;
    console.log("With async Function");
    console.log(val); // (wait for 5 sec for the promise to be resolved)
                      // With async Function
                      // Promise Resolved
}
AgetData();*/

// Resolving two ***same Promises
/*async function AgetData(){
    const val=await p;
    console.log("With async Function");
    console.log(val); 
    const val1=await p;
    console.log("With async Function");
    console.log(val1); // (wait for 5 sec for the promise to be resolved)
                       // With async Function
                       // Promise Resolved
                       // With async Function
                       // Promise Resolved
}
AgetData(); */


// Resolving two ***Different Promises with different Timeout's
// Case -1 
/*const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 5000);
});
const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 10000);
});*/
// Case -2
const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 10000);
});
const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 5000);
});
//***Working of async Function 
// Case -1
// First AgetData() will go into call stack and "Execution started" will be executed
// Next line the JS engine encounters a promise and as the resolving of timer is of 5sec it will leave that promise and go to next line encounters another promise of time 10 sec and as JS waits for none it throws the AgetData() from the call stack 
// After 5 sec the AgetData() will enter again in call stack and print "With async Function","Promise Resolved"
// After 5 sec (10sec - 5sec) the AgetData() will enter again in call stack and print "With async Function","Promise Resolved"
// Case -2
// First AgetData() will go into call stack and "Execution started" will be executed
// Next line the JS engine encounters a promise and as the resolving of timer is of 10sec it will leave that promise and go to next line encounters another promise of time 5 sec and as JS waits for none it throws the AgetData() from the call stack 
// After 5 sec the AgetData() will enter again in call stack and print "With async Function","Promise 1 Resolved"
// After 5 sec the AgetData() will enter again in call stack and print "With async Function","Promise Resolved"
async function AgetData(){ 
    console.log("Execution Starts");
    const val=await p;
    console.log("With async Function");
    console.log(val); 
    const val1=await p1;
    console.log("With async Function");
    console.log(val1); // Case -1
                       // Execution Started
                       // (wait for 5 sec for the promise to be resolved)
                       // With async Function
                       // Promise Resolved
                       // (wait for another 5 sec for the promise to be resolved)
                       // With async Function
                       // Promise 1 Resolved
                       // Case -2
                       // Execution Started
                       // (wait for 10 sec for the promise to be resolved)
                       // With async Function
                       // Promise 1 Resolved
                       // With async Function
                       // Promise Resolved                       

}
AgetData();
// async/await ((vs)) promise.then()/catch()
// *** async/await is only an syntactical sugar over promise.then()/catch() it means the javascript internally takes promise.then()/.catch() even if we use async/await
// async/await makes more sense when there occurs an .then() promise hell