const User = require("../Models/ModelUser"); // Make sure the path to your model is correct

async function handleGetAllUsers(req, res) {
  try {
    const allDbUsers = await User.find({});
    res.json(allDbUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function handleGetUserById(req, res) {
  try {
    const userId = req.params.userId; // Assuming userId is passed as a URL parameter
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function handleUpdateUserById(req, res) {
  try {
    const userId = req.params.userId; // Assuming userId is passed as a URL parameter
    const updatedUserData = req.body;

    const user = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "User updated successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function handleDeleteUserById(req, res) {
  try {
    const userId = req.params.userId; // Assuming userId is passed as a URL parameter

    const user = await User.findByIdAndRemove(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "User deleted successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (!body || !body.firstName || !body.lastName || !body.email || !body.jobTitle) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });
    return res.status(201).json({ msg: "success", user: result }); // Return the created user object
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
