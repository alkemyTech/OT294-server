const express = require("express");

//Controllers
const { createMember } = require("../controllers/members.controller");

// Middlewares
const { createMemberValidators } = require("../validators/members.validator");

const router = express.Router();

/* POST create member. */
router.post("/", createMemberValidators, createMember);

module.exports = router;
