const express = require("express");

//controllers
const { createOrganization, updateOrganization, getOrganizationById, getSlidesByOrganization} = require("../controllers/organization.controller");

//middlewares
const { auth } = require("../middlewares/auth.middleware");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { organizationExists } = require("../middlewares/organization.middleware");
const { createOrganizationValidators } = require("../validators/organizations.validator");

const organizationRouter = express.Router();

organizationRouter.get("/:id", organizationExists, getSlidesByOrganization);
organizationRouter.post("/public", auth, authAdmin, createOrganizationValidators, createOrganization);
organizationRouter.patch("/public/:id", organizationExists, auth, authAdmin, updateOrganization);
organizationRouter.get("/public/:id", organizationExists, getOrganizationById);

module.exports = organizationRouter;
