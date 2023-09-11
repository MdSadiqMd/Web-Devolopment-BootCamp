// The http module of NodeJS id used to Create a http Server
// Go to http://localhost:8000/ in Chrome
/*const http=require("http");
const myServer=http.createServer((req,res)=>{  // This Arrow function is responsible to run the Server with Arguments req-request, res-response and these arguments will contain ***meta data of request and response
    console.log("Request Recieved"); // It will print when new Request Encounters
    console.log(req); // Whole(huge) meta data of Client Request
    //console.log(req.headers); // Specific meta data of Client Request
    res.end("Hello From Server"); // This is message from server
});*/

//myServer.listen(8000,()=> console.log("Server Started"));

// Now let's Create a HTTP Server Which logs the 