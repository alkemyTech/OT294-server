const express = require("express");
const router = express.Router();
const { createContacts, listContacts } = require("../controllers/contacts.controller");
const { checkContacts } = require("../validators/contacts.validator");

router.get("/", listContacts);
router.post("/", checkContacts, createContacts);

module.exports = router;
