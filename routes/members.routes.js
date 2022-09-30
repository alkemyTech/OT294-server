const express = require("express");

//Controllers
const { getAllMembers } = require("../controllers/members.controller");

const router = express.Router();

/* GET members listing. */
router.get("/", getAllMembers);

module.exports = router;
