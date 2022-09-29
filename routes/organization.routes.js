const express = require("express");

//controllers
const { updateOrganization } = require("../controllers/organization.controller");

//middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { createOrganizationValidators } = require("../validators/organizations.validator");


const router = express.Router();

router.post("/public", authAdmin, createOrganizationValidators, updateOrganization);


module.exports = router;
