const express = require("express");

const { commentExists } = require("../middlewares/comment.middleware");

const { updateComment } = require("../controllers/comments.controller");
const router = express.Router();

router.patch("/:id", commentExists, updateComment);

module.exports = router;
