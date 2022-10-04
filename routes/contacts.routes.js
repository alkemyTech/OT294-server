const express = require("express");
const router = express.Router();
const { createContacts, backOficeContacts, listContacts } = require("../controllers/contacts.controller");
const { checkContacts } = require("../validators/contacts.validator");

router.get("/", listContacts);
router.get("/backofice/contacts", backOficeContacts);
router.post("/", checkContacts, createContacts);

module.exports = router;
