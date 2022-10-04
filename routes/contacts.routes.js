const express = require("express");
const router = express.Router();
const { createContacts, backOficeContacts } = require("../controllers/contacts.controller");
const { checkContacts } = require("../validators/contacts.validator");


router.get("/backofice/contacts", backOficeContacts);
router.post("/", checkContacts, createContacts);

module.exports = router;
