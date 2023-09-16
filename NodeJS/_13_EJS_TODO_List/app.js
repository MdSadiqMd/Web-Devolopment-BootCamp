const express=require("express");
const bosyParser=require("body-parser");
const ejs=require("ejs");

const app=express();
app.set('view engine','ejs');
app.use(bosyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    let options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    let today=new Date();
    let day=today.toLocaleDateString("en-US",options);
    res.render("list",{KindOfDay:day}); // It finds list Folder in views(default) folder
});

app.listen(8000,()=>{console.log("Server Started at 8000")})