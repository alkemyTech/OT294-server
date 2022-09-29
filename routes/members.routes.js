const express = require("express");
const router = express.Router();

// Controllers
const { deleteMember } = require("../controllers/members.controller");

// Middlewares
const { memberExists } = require("../middlewares/members.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");

router.delete("/:id", authAdmin, memberExists, deleteMember);

module.exports = router;
