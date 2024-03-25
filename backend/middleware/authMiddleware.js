const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // console.log(req.headers.authorization);

    try {
      // Get Token From Request
      const token = req.headers.authorization.split(" ")[1];
      // console.log(token);

      // Verify Token - Use JWT (jsonwebtoken)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);

      // Get User From Token
      const user = await User.findById(decoded.id).select("-password");
      console.log(user);

      if (!user) {
        res.status(401);
        throw new Error("You UnAuthorized");
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid User");
    }
  } else {
    res.status(401);
    throw new Error("You Are Unauthorized");
  }
});

module.exports = { protect };
