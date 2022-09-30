const express = require("express");

//Controllers
const { getAllMembers, createMember, deleteMember } = require("../controllers/members.controller");

// Middlewares
const { memberExists } = require("../middlewares/members.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { createMemberValidators } = require("../validators/members.validator");

/* GET members listing. */
router.get("/", getAllMembers);

/* POST create member. */
router.post("/", createMemberValidators, createMember);

/* DELETE member deleted. */
router.delete("/:id", authAdmin, memberExists, deleteMember);

module.exports = router;
