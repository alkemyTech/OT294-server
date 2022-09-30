const express = require("express");

//Controllers
const { getAllMembers, createMember } = require("../controllers/members.controller");

// Middlewares
const { createMemberValidators } = require("../validators/members.validator");

const router = express.Router();

/* GET members listing. */
router.get("/", getAllMembers);

/* POST create member. */
router.post("/", createMemberValidators, createMember);

module.exports = router;
