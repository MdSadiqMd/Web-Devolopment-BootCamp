const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// Connecting to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/MongoDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB error", err));

// Define the user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: String,
  gender: String,
}, { timestamps: true }); // It will store the user creation time

const User = mongoose.model("User", userSchema);

app.use(express.json()); // Parse JSON requests

app.use((req, res, next) => {
  console.log("Hi from Middleware");
  console.log(`${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`);
  next(); // If we don't call next(), the remaining code will not run
});

// General HTML Rendering
app.get("/users", async (req, res) => {
  const users = await User.find();
  const html = `
    <ul>
      ${users.map(user => `<li>${user.firstName}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// RESTful API --> JSON Rendering
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Dynamic URL rendering
app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });
  return res.status(201).json({ msg: "success", user: result }); // Return the created user object
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
