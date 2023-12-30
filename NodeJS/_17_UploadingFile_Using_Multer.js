const path=require("path");
const express=require("express");

const app=express();
const PORT=8000;

app.set("view engine","ejs");
app.set("views",path.resolve('C:/Users/Sadiq/Desktop/Web-Devolopment-BootCamp/NodeJS/_17_views'));

app.use(express.json());

app.get("/",(req,res)=>{
    return res.render("homepage");
});

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})