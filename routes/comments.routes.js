const express = require("express");
const router = express.Router();

// Controllers
const {
    deleteComment,
} = require("../controllers/comments.controller");

const commentExists = require("../middlewares/comments.middleware");

router.delete("/:id", commentExists, deleteComment);

module.exports = router;
