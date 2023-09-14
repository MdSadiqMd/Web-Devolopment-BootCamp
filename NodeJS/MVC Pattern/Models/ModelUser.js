const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", userSchema);
