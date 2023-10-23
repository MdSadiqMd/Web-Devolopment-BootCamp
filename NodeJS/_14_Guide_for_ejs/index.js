// There are Some Steps to be followed When Working with ejs
// 1. ejs install --> npm i ejs
// 2. Configure ejs --> app.set("view engine","ejs")
// 3. Create Folder with name "views"
// 4. Create ejs Files in "views" Folder
// 5. and use render function in the main file and write the name of "ejs" file without .ejs  

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // As we are giving the views folder and index.js in same folder (_14_Guide_for_ejs) so we need to give customised path here ; remember in path "/"
  res.render(path.join("C:/Users/Sadiq/Desktop/Web-Devolopment-BootCamp/NodeJS/_14_Guide_for_ejs/views/index.ejs")); // Remember in path we need to give ".ejs"
  // If we are giving the views folder and index.js in different directory then we just write this line
  //res.render("index");
});

app.listen(8000);




