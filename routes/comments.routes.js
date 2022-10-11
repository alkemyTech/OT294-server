const express = require("express");
const router = express.Router();
const { getAllComments } = require("../controllers/comments.controller");

router.get("/", getAllComments);

module.exports = router;