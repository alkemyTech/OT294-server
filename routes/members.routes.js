const express = require("express");
const router = express.Router();

//Controllers
const { getAllMembers, createMember, deleteMember, updateMember } = require("../controllers/members.controller");

// Middlewares
const { memberExists } = require("../middlewares/members.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { createMemberValidators } = require("../validators/members.validator");
const { auth } = require("../middlewares/auth.middleware");

/* GET members listing. */
router.get("/", getAllMembers);

/* POST create member. */
router.post("/", createMemberValidators, createMember);

/* UPDATE delete member. */
router.patch("/:id", memberExists, updateMember);

/* DELETE member deleted. */
router.delete("/:id", auth, authAdmin, memberExists, deleteMember);

module.exports = router;
