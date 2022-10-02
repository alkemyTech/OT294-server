const express = require("express");
const router = express.Router();
const { createContacts } = require("../controllers/contacts.controller");
const { checkContacts } = require("../validators/contacts.validator");

router.post("/", checkContacts, createContacts);

module.exports = router;
