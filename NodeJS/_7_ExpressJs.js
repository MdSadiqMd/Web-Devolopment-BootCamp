// The _5_Building_HTTP_Server_with_URL_Handling Code using Express JS
// If we see the _5_Building_HTTP_Server_with_URL_Handling code we can see that for every path we wrote an destination like '/about','/home',.... 
// The Express handle these things for us
const http=require("http");
const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    return res.send("Hello From Home Page");
});
app.get("/about",(req,res)=>{
    return res.send(`Hello ${req.query.name}`);
});
const myServer=http.createServer(app);

myServer.listen(8000,()=>{
    console.log("Server Started");
});
// Test Cases --> Manipulate the URL
//            1. http://localhost:8000/about
//            2. http://localhost:8000/about?name=sadiq
