const Documents = require("../models/documentModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Create Document
const createDocument = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }
  console.log(req.file);
  // Get User id from jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found!!");
  }

  const document = await Documents.create({
    title,
    description,
    user: req.user.id,
    photo: req.file.path,
  });

  res.send(document);
});

// Get Document

const getDocuments = asyncHandler(async (req, res) => {
  //  Get User Id From JWT
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User Not Found!");
  }

  const documents = await Documents.find({ user: req.user.id });

  if (!documents) {
    res.status(404);
    throw new Error("Documents Not Found");
  }

  res.status(200).json(documents);
});

// Get Single Doument
const getDocument = asyncHandler(async (req, res) => {
  //  Get User Id From JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const document = await Documents.findById(req.params.id);
  if (!document) {
    res.status(404);
    throw new Error("Document Not Found!");
  }
  res.status(200).json(document);
});

// Delete Document
const deleteDocument = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const document = await Documents.findById(req.params.id);

  if (!document) {
    res.status(404);
    throw new Error("Document Not Found!");
  }

  if (document.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  } else {
    await Documents.findByIdAndDelete(req.params.id);
    res.status(201).json({
      msg: "Document Deleted!!",
    });
  }
});

// Update Document
const updateDocument = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const document = await Documents.findById(req.params.id);

  if (!document) {
    res.status(404);
    throw new Error("Document Not Found!");
  }

  if (document.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  console.log(Documents);
  const updatedDocument = await Documents.findByIdAndUpdate(
    // console.log("data"),
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedDocument);

  console.log(updateDocument);
  res.status("document update");
});


// const updateDocument = asyncHandler(async(req, res)=>{
//   const user = await User.findById(req.user.id);
//   if (!user) {
//     res.status(401);
//     throw new Error("User Not Found");
//   }

//   const document = await Documents.findById(req.params.id);

//   if (!document) {
//     res.status(404);
//     throw new Error("Document Not Found!");
//   }

//   if (document.user.toString() !== req.user.id) {
//     res.status(401);
//     throw new Error("Not Authorized");
//   }

//   const updatedDocument = await Documents.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {new : true}
//   );
//   res.status(200).json(updatedDocument)
// })



module.exports = {
  createDocument,
  getDocuments,
  getDocument,
  deleteDocument,
  updateDocument,
};
