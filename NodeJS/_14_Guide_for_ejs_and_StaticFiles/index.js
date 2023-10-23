// There are Some Steps to be followed When Working with ejs
// 1. ejs install --> npm i ejs
// 2. Configure ejs --> app.set("view engine","ejs")
// 3. Create Folder with name "views" (go to line 15 for possible occuring errors)
// 4. Create ejs Files in "views" Folder
// 5. and use render function in the main file and write the name of "ejs" file without .ejs  

// Steps to Follow when working with Static Files (The public Folder where you segregate the frontend)
// 1. Create a Folder Called Public
// 2. Create Sub-Folders with names images,stylesheets,javascripts
// 3. Configure express Static

const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
// Configuring Express Static
//app.use(express.static("./public"));
//As we are giving the public folder and index.js in same folder (_14_Guide_for_ejs) so we need to give customised path here ; remember in path "/"
app.use(express.static(path.join("C:/Users/Sadiq/Desktop/Web-Devolopment-BootCamp/NodeJS/_14_Guide_for_ejs_and_StaticFiles","public")));

app.get("/", function (req, res) {
  // If we are giving the views folder and index.js in different directory then we just write this line
  //res.render("index");
  // As we are giving the views folder and index.js in same folder (_14_Guide_for_ejs) so we need to give customised path here ; remember in path "/"
  res.render(path.join("C:/Users/Sadiq/Desktop/Web-Devolopment-BootCamp/NodeJS/_14_Guide_for_ejs_and_StaticFiles/views/index.ejs"),{PORT:8000}); //The Variable PORT Given here acts as an prop in react as ejs converts the variable value while rendering // Remember in path we need to give ".ejs"
});

app.listen(8000);




