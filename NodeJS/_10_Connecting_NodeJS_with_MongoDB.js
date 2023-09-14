const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/MongoDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB error", err));

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
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hi from Middleware");
  console.log(`${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`);
  next();
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  const html = `
    <ul>
      ${users.map(user => `<li>${user.firstName}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
});

app
  .route("/api/users")
  .get(async (req, res) => {
    const allDbUsers = await User.find({});
    res.json(allDbUsers);
  })
  .patch(async (req, res) => {
    const userId = req.body.userId;
    const updatedUserData = req.body.updatedData;

    if (!userId || !updatedUserData) {
      return res.status(400).json({ msg: "userId and updatedData are required" });
    }

    try {
      const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      res.json({ msg: "User updated successfully", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  })
  .delete(async (req, res) => {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({ msg: "userId is required" });
    }

    try {
      const user = await User.findByIdAndRemove(userId);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      res.json({ msg: "User deleted successfully", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Internal Server Error" });
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
