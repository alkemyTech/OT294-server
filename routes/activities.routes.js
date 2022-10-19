const express = require("express");
const router = express.Router();
const { createActivityValidators } = require("../validators/activities.validator");
const { updateActivity, createActivity, getAllActivities } = require("../controllers/activities.controller");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { activityExists } = require("../middlewares/activities.middleware");
const { auth } = require("../middlewares/auth.middleware");

router.get("/", auth, authAdmin, getAllActivities);
router.post("/", auth, authAdmin, createActivityValidators, createActivity);
router.patch("/:id", activityExists, updateActivity);

module.exports = router;
