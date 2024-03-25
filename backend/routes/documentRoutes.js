const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createDocument,
  getDocuments,
  getDocument,
  deleteDocument,
  updateDocument,
} = require("../controller/documentController");
const uploads = require("../middleware/multer");
const router = express.Router();

router.route("/").get(protect, getDocuments);
// router.route("/create").post(protect, createDocument);
router.route("/create").post(protect, uploads.single("photo"), createDocument);
// router.route("/create").post(protect, createDocument)

router.route("/:id").get(protect, getDocument).delete(protect, deleteDocument);
// .put(protect, updateDocument);

// .put(protect, updateDocument);

router
  .route("/update/:id")
  .put(protect, uploads.single("photo"), updateDocument);
module.exports = router;
