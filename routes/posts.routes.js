const express = require("express");

const { postExists } = require("../middlewares/post.middleware");

const { getCommentsByPost } = require("../controllers/posts.controller");

const router = express.Router();

router.get("/:id/comments", postExists, getCommentsByPost);

module.exports = router;
