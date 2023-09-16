const express=require("express");
const bosyParser=require("body-parser");

const app=express();
app.use(bosyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello World");
    let today=new Date().getDate();
    console.log(today);
});

app.listen(8000,()=>{console.log("Server Started at 8000")})