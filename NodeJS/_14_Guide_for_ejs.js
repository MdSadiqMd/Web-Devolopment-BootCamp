// There are Some Steps to be followed When Working with ejs
// 1. ejs install --> npm i ejs
// 2. Configure ejs --> app.set("view engine","ejs")
// 3. Create Folder with name "views"
// 4. Create ejs Files in "views" Folder
// 5. and use render function in the main file and write the name of "ejs" file without .ejs  

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "C:/Users/Sadiq/Desktop/Web-Development-BootCamp/_14_views"); 

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000);
