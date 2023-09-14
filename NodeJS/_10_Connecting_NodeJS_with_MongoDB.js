const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// Connect to MongoDB (make sure to replace the connection string)
mongoose.connect('mongodb://127.0.0.1:27017/FirstMongodB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

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
},{timestamps:true}); //It will the user created Time

// Create a user model
const User = mongoose.model("User", userSchema);

// Middleware for JSON request parsing
app.use(express.json());

// Middleware for logging
app.use((req, res, next) => {
  console.log("Hi from Middleware");
  console.log(`${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`);
  next();
});

// API Routes

// Get all users
app.get("/api/users", async (req, res) => {
  const allDbUsers=await User.find({}); // Empty parenthesis means return all users
  try {
    const html=`
    <ul>
      ${allDbUsers.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html);
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new user
app.post("/api/users", async (req, res) => {
  try {
    const { firstName, lastName, email, jobTitle, gender } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      jobTitle,
      gender,
    });

    await newUser.save();

    // Log the user data in the terminal
    console.log("User created:", newUser);

    return res.status(201).json({ msg: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
