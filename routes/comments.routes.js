const express = require("express");
const router = express.Router();
const { commentExists } = require("../middlewares/comment.middleware");
const createCommentValidators = require("../validators/comments.validator");
// Controllers
const {
  createComment,
  updateComment,
  deleteComment,
  getAllComments
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.post("/", createCommentValidators, createComment);
router.patch("/:id", commentExists, updateComment);
router.delete("/:id", commentExists, deleteComment);

module.exports = router;
