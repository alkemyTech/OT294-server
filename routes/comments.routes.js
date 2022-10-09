const express = require("express");
const router = express.Router();

// Controllers
const {
    createComment,
} = require("../controllers/comments.controller");

const createCommentValidators = require("../validators/comments.validator");

router.post("/", createCommentValidators, createComment);

module.exports = router;
