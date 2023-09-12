const express=require("express");
// Go to mackaroo.com and generate the JSON Data
const users=require("./_8_MOCK_DATA.json");
const app=express();
const PORT=8000;

// General HTML rendering
app.get("/users",(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// RESTful API
app.get("/api/users",(req,res)=>{
    return res.json(users);
});

app.listen(PORT,()=>console.log(`Server Started at ${PORT}`));
