const express=require("express");
const bosyParser=require("body-parser");

const app=express();
app.use(bosyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    let options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    let today=new Date();
    let day=today.toLocaleDateString("en-US",options);
    res.send(day);
    
});

app.listen(8000,()=>{console.log("Server Started at 8000")})