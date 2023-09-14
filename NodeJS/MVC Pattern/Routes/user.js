const express = require("express");
 
const router=express.Router();

router.use((req, res, next) => {
  console.log("Hi from Middleware");
  console.log(`${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`);
  next();
});

router.get("/users", async (req, res) => {
  const users = await User.find();
  const html = `
    <ul>
      ${users.map(user => `<li>${user.firstName}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

router.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  res.json(allDbUsers);
});

router
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
router.post("/api/users", async (req, res) => {
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

module.exports=router;