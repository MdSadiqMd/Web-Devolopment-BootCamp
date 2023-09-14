const express = require("express");
const router = express.Router();
const User = require("../models/User");

// General HTML Rendering
router.get("/users", async (req, res) => {
  const users = await User.find();
  const html = `
    <ul>
      ${users.map(user => `<li>${user.firstName}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// RESTful API --> JSON Rendering
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

module.exports = router;
