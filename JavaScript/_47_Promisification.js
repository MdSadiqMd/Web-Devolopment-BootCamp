// Promisification --> It Converts any callback Function into Promises
// Let us write a promisification function which converts any Function into Promises
function promisify(fn) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        fn(...args, (error, result) => { // Fix the syntax issue here
          if (error) return reject(error);
          return resolve(result);
        });
      });
    };
  }
  
  // Example function to be promisified
  function someCallbackFunction(arg1, arg2, callback) {
    // Simulate an async operation
    setTimeout(() => {
      if (arg1 && arg2) {
        callback(null, arg1 + arg2);
      } else {
        callback("Error: Invalid arguments", null);
      }
    }, 1000);
  }
  
  // Promisify the function
  const promisifiedFunction = promisify(someCallbackFunction);
  
  // Calling the promisified function
  promisifiedFunction(2, 3)
    .then(result => {
      console.log("Success:", result);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  