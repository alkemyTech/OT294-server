const express = require("express");
const router = express.Router();

// Controllers
const {
    createComment,
    updateComment,
} = require("../controllers/comments.controller");

const { commentExists } = require("../middlewares/comment.middleware");

const createCommentValidators = require("../validators/comments.validator");

router.post("/", createCommentValidators, createComment);
router.patch("/:id", commentExists, updateComment);

module.exports = router;
