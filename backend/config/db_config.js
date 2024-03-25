const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected : ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`DB Connection Failed : ${error.message}`.bgRed.white);
  }
};


module.exports = connectDB