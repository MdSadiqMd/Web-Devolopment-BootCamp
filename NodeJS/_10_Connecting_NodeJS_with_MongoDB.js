const express = require("express");
const users = require("./_8_MOCK_DATA.json");
const fs = require("fs");
const mongoose=require("mongoose");
const app = express();
const PORT = 8000;

// Middleware (represented as plugin) --> These Middleware act as an authentication check between request and response cycle the response block will not be executed until the Middleware had run
// For more Information on Middlewares visit "https://expressjs.com/en/guide/using-middleware.html"
app.use(express.urlencoded({ extended: false })); // This middleware will encode the data comming from url and parse the data and forward the execution to next Middleware
app.use((req,res,next)=>{
  console.log("Hi from Middle ware");
  console.log(`${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`);
  next(); // ***If we not write next() the remaining code will not run
});

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
app.listen(PORT,()=>console.log(`Server Started at ${PORT}`));