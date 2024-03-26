const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db_config");
const color = require("colors");
const path = require("path");
// const upload = multer({dest : "uploads/"})
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000;
// DB Connection
connectDB();

// static file
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.use("/api/user", require("./routes/userRoutes"));

// Configure Multer for file uploads

// Document Routes
app.use("/api/document", require("./routes/documentRoutes"));
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/FrontENd/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "FrontENd", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({
      msg: "WELCOME TO DOCUMENT API",
    });
  });
}

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`.bgBlue.white);
});
