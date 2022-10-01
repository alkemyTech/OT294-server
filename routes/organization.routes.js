const express = require("express");

//controllers
const { updateOrganization, getOrganizationById } = require("../controllers/organization.controller");

//middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { organizationExists } = require("../middlewares/organization.middleware");
const { createOrganizationValidators } = require("../validators/organizations.validator");


const router = express.Router();

router.post("/public", authAdmin, createOrganizationValidators, updateOrganization);
router.get("/public/:id", organizationExists, getOrganizationById);


module.exports = router;
