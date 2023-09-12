// Open Post Man --> Click on "+" Sign (new Work Place Created)
// for GET,PATCH and DELETE Method  --> select GET and write the url we write on browser (http://localhost:8000/api/users in case of GET) (***http not https) --> Press Send
// for POST --> select POST --> select body --> select x-www-form-urlencoded --> write a demo key value pair needed to be appended --> Press Send
const express = require("express");
const users = require("./_8_MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// General HTML Rendering
app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// RESTful API --> JSON Rendering
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Dynamic URL rendering
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

// Create a new user
app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUserId = users.length + 1;
  const newUser = { ...body, id: newUserId };
  
  users.push(newUser);

  fs.writeFile("./_8_MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ error: "Error saving user data" });
    }
    return res.status(201).json({ status: "success", id: newUserId });
  });
});

// Update user by ID (you can modify this part as needed)
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedUserData = req.body;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUserData };
    fs.writeFile("./_8_MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving user data" });
      }
      return res.json({ status: "success" });
    });
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

// Delete user by ID (you can modify this part as needed)
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    fs.writeFile("./_8_MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving user data" });
      }
      return res.json({ status: "success", user: deletedUser });
    });
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

// ***(or)
/*app
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
    });*/


app.listen(PORT,()=>console.log(`Server Started at ${PORT}`));
