const express = require("express");

const router = express.Router();

// Controllers
const { getAllmembers, deleteMember } = require("../controllers/members.controller");

// Middlewares
const { memberExists } = require("../middlewares/members.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");

/* GET members listing. */
router.get("/", getAllMembers);

/* DELETE member deleted. */
router.delete("/:id", authAdmin, memberExists, deleteMember);

module.exports = router;
