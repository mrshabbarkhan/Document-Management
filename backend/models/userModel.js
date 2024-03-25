const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Fill Name!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Fill Email!"],
    },
    password: {
      type: String,
      required: [true, "Please Fill Password!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
