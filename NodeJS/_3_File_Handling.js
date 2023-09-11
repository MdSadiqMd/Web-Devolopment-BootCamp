const fs=require("fs"); // This Module is used in File Handling

// This Line Create a File called "text.txt" and if somethings go wrong returns an error
// Synchronous File Creation
fs.writeFileSync("./_3_test.txt","Hello, World!",(err)=>{}); 
// Asynchronous File Creation
//fs.writeFile("./_3_test.txt","Hello, World!",(err)=>{}); 

// Reading the File "Synchronously" --> It returns the Value of read file.so, Store in a variable
//const result=fs.readFileSync("./_3_test.txt","utf-8");
//console.log(result);
// Reading the File "Asynchronously" --> It's return type is void.so, attach a callback function to see the output
/*fs.readFile("./_3_test.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    } else {
        console.log(result);
    }
});*/

// Appending Data in File
//fs.appendFileSync("./_3_test.txt",new Date().getDate().toLocaleString()); // This Line will Append the today's Date and the Inserting type is only String.so, we are converting it in String

// Copying a file
//fs.cpSync("./_3_test.txt","./copy.txt");

// Deleting a file
//fs.unlinkSync("./copy.txt");

// Statistics of a file --> gives Complete Information of a file
console.log(fs.statSync("./_3_test.txt"));

// ***Creating Directory
//fs.mkdirSync("_3_Test/a/b",{recursive:true});
