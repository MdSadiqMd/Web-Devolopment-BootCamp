// Define a function that returns a promise that resolves after a given delay
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // Define an asynchronous function using the async keyword
  async function asyncFunction() {
    console.log("Start of asyncFunction");
    
    // Use the await keyword to pause execution until the promise is resolved
    await delay(2000); // Pause for 2 seconds
    
    console.log("After 2 seconds");
    
    // You can await multiple promises in sequence
    await delay(1000); // Pause for an additional 1 second
    
    console.log("After 1 more second");
    
    // You can also use try-catch blocks to handle errors
    try {
      const result = await someFunctionThatMightThrowAnError();
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
    
    console.log("End of asyncFunction");
  }
  
  // Call the async function
  asyncFunction().then(() => {
    console.log("Async function has completed");
  }).catch((err) => {
    console.error("Async function encountered an error:", err);
  });
  