const express = require("express");
const router = express.Router();
const { commentExists } = require("../middlewares/comment.middleware");
const { createCommentValidators } = require("../validators/comments.validator");
const { auth } = require("../middlewares/auth.middleware");
// Controllers
const {
  createComment,
  updateComment,
  deleteComment,
  getAllComments
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.post("/", createCommentValidators, createComment);
router.patch("/:id", commentExists, auth, updateComment);
router.delete("/:id", commentExists, auth, deleteComment);

module.exports = router;
