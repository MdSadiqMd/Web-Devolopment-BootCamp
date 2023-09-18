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

// Stopping the Execution of Promise
const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 5000);
});
// Without async Function
function getData() {
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
AgetData();
