// Models
const { Slide, Organization } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createOrganization = catchAsync(async (req, res) => {
  const { name, image, address, phone, email, welcomeText, aboutUsText, facebook, linkedin, instagram } =
    req.body;

  const organizationcreated = await Organization.create({
    name,
    image,
    address,
    phone,
    email,
    welcomeText,
    aboutUsText,
    facebook,
    linkedin,
    instagram
  });

  res.status(201).json({
    status: true,
    message: "La organizacion ha sido creada",
    data: organizationcreated,
  });
});

const getSlidesByOrganization = catchAsync(async (req, res) => {
  const { organization } = req;
  const slides = await Slide.findAll({
    where: { organizationId: organization.id },
  });
  const orderedSlides = slides.sort((a, b) => a.order - b.order);

  res.status(200).json({
    status: true,
    message: "Listado de slides",
    data: orderedSlides,
  });
});

const updateOrganization = catchAsync(async (req, res) => {
  const { organization } = req;
  const { name, image, address, phone, email, welcomeText, aboutUsText, facebook, linkedin, instagram } =
    req.body;

  const organizationUpdated = await organization.update({
    name,
    image,
    address,
    phone,
    email,
    welcomeText,
    aboutUsText,
    facebook, 
    linkedin, 
    instagram
  });

  res.status(200).json({
    status: true,
    message: "La informacion de la organizacion ha sido actualizada",
    data: organizationUpdated,
  });
});

const getOrganizationById = catchAsync(async (req, res) => {
    const organizationObj = {
        id: req.organization.id,
        name: req.organization.name,
        image: req.organization.image,
        phone: req.organization.phone,
        address: req.organization.addressgit,
        facebook: req.organization.urlFacebook,
        linkedin: req.organization.urlLinkedin,
        instagram: req.organization.urlInstagram
    };
    res.status(200).json({
        status: true,
        message: "La informacion de las organizaciones ha sido obtenida",
        data: organizationObj
    });
});

module.exports = {
  createOrganization,
  getOrganizationById,
  getSlidesByOrganization,
  updateOrganization
}