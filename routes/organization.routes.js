const express = require("express");

//controllers
const { updateOrganization, getOrganizationById, getSlidesByOrganization} = require("../controllers/organization.controller");

//middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { organizationExists } = require("../middlewares/organization.middleware");
const { createOrganizationValidators } = require("../validators/organizations.validator");

const organizationRouter = express.Router();

organizationRouter.get("/:id", organizationExists, getSlidesByOrganization);
organizationRouter.post("/public", authAdmin, createOrganizationValidators, updateOrganization);
organizationRouter.get("/public/:id", organizationExists, getOrganizationById);

module.exports = organizationRouter;
