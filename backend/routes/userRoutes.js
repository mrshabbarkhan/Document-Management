const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

// User Register
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
