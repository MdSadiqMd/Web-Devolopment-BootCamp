// In Node JS Architecture the Requests are of two types 

// 1. Blocking
// This Blocks the Order of Execution and give task prefernce in Order wise
// The Blocking Operation delay is due to it gives the Operatin to thread Pool and An computer has Thread pools number equal to it's CPU
// If all threads pools are in work the further execution will not proceed until any thread is empty
//console.log("1");
//const result=fs.readFileSync("./_3_test.txt","utf-8");
//console.log(result);
//console.log("2"); // Output:"1"
                    //        "Hello, World!"
                    //        "2"

// 2. Non-Blocking
// This will not halt a Operation for other Operation  
//console.log("1");
/*fs.readFile("./_3_test.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    } else {
        console.log(result);
    }
});*/
//console.log("2"); // Output:"1"
                    //        "2"
                    //        "Hello, World!"                  