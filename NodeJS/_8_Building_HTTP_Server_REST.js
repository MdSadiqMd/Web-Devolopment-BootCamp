const express=require("express");
// Go to mackaroo.com and generate the JSON Data
const users=require("./_8_MOCK_DATA.json");
const app=express();
const PORT=8000;

// General HTML Rendering
app.get("/users",(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// RESTful API --> JSON Rendering
app.get("/api/users",(req,res)=>{
    return res.json(users);
});

// *****Browsers will default intake Only GET requests 
// *** Dynamic URL rendering --> If we write :x in an url in code then that x is dynamic
//                           --> a Function which returns the person data as per given id value
/*app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
});

// Post
app.post("/api/users",(req,res)=>{
    // Create new User
    return res.json({status:"pending"});
});

// Patch
app.patch("/api/users/:id",(req,res)=>{
    // Edit the user with id
    return res.json({status:"pending"});
});

// Delete
app.delete("/api/users/:id",(req,res)=>{
    // Deleting the User with id
    return res.json({status:"pending"});
});*/

// ***(or)
app
    .route("/api/users/:id") // By Using this route we can peform all operations on one url rather than creating different HTTP methods on same url
    .get("/api/users/:id",(req,res)=>{
        const id=Number(req.params.id);
        const user=users.find((user)=>user.id===id);
        return res.json(user);
    })
    .post("/api/users",(req,res)=>{
        // Create new User
        return res.json({status:"pending"});
    })
    .patch("/api/users/:id",(req,res)=>{
        // Edit the user with id
        return res.json({status:"pending"});
    })
    .delete("/api/users/:id",(req,res)=>{
        // Deleting the User with id
        return res.json({status:"pending"});
    });


app.listen(PORT,()=>console.log(`Server Started at ${PORT}`));
