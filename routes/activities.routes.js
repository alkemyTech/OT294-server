const express = require("express");
const router = express.Router();
const { createActivityValidators } = require("../validators/activities.validator");
const { updateActivity } = require("../controllers/activities.controller");

router.put("/activities/:id", createActivityValidators, updateActivity);

module.exports = router;
