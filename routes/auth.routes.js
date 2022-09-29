const express = require("express");
const router = express.Router();
const { getAuthenticatedUserInformation } = require("../controllers/auth.controller");

/* GET authenticated user information. */
router.get("/me", getAuthenticatedUserInformation);

module.exports = router;