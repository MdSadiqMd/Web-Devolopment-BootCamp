// Write in Terminal "npm i url" to Install the Url Dependencies in package.json file
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

// Now let's Create a HTTP Server Which logs the date, Time and IP Address of the User who visited the Website 
const http = require("http");
const fs = require("fs");
const url = require("url"); // Importing the url parsing module
fs.writeFile("./_5_log.txt", "Log File", (err) => {});
const myServer = http.createServer((req, res) => {
    const log = `${new Date().toISOString()}: ${req.url} New Request Received`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("./_5_log.txt", log + "\n", (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                if (username) {
                    res.end(`Hi, ${username}`);
                } else {
                    res.end("Hello, User!");
                }
                break;
            case '/search':
                const search = myUrl.query.search_query;
                if (search) {
                    res.end(`You searched for: ${search}`);
                } else {
                    res.end("No search query provided.");
                }
                break;
            default:
                res.end("404 Not Found");
                break;
        }
    });
});
myServer.listen(8000, () => {
    console.log("Server is running on port 8000");
});
// Test Cases --> Manipulate the URL
//            1. http://localhost:8000/about
//            2. http://localhost:8000/?name=sadiq
//            3. http://localhost:8000/search
//            4. http://localhost:8000/search?search_query=Node.js