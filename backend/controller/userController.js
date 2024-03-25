const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// User Register
const registerUser = asyncHandler(async (req, res) => {
  // console.log(req.body);

  const { name, email, password } = req.body;

  // Check if all fields are coming
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }

  // Check if User Alrady Exist
  const userExist = await User.findOne({ email: email });
  // console.log(userExist);

  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Cannot Register Here");
  }
  res.send("User Registered");
});

// Login User

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }
  const user = await User.findOne({ email: email }).maxTimeMS(20000);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser };
