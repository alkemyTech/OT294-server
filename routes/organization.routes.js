const express = require("express");

//controllers
const {
  getSlidesByOrganization,
  updateOrganization,
} = require("../controllers/organization.controller");

//middlewares
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const {
  organizationExists,
} = require("../middlewares/organization.middleware");
const {
  createOrganizationValidators,
} = require("../validators/organizations.validator");

const organizationRouter = express.Router();

newsRouter.get("/:id", organizationExists, getSlidesByOrganization);

organizationRouter.post(
  "/public",
  authAdmin,
  createOrganizationValidators,
  updateOrganization
);

module.exports = organizationRouter;
