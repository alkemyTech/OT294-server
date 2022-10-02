const express = require("express");
const router = express.Router();
const { createActivityValidators, updateActivityValidators } = require("../validators/activities.validator");
const { updateActivity, createActivity } = require("../controllers/activities.controller");
const { authAdmin } = require("../middlewares/authAdmin.middleware");

router.post("/", authAdmin, createActivityValidators, createActivity);
router.put("/activities/:id", updateActivityValidators, updateActivity);

module.exports = router;
