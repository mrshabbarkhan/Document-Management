const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
     user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  
    title: {
      type: String,
      required: [true, "Please Add Title"],
    },
  
    description: {
      type: String,
      required: [true, "Please Add Description"],
    },
    
    photo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Documents", documentSchema);
