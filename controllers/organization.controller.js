// Models
const { Slide } = require("../models");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const getSlidesByOrganization = catchAsync(async (req, res) => {
  const { organization } = req;
  const slides = await Slide.findAll({
    where: { organizationId: organization.id },
  });
  const orderedSlides = slides.sort((a, b) => a.order - b.order);

  res.status(200).json({
    status: "true",
    message: "Listado de slides",
    data: orderedSlides,
  });
});

const updateOrganization = catchAsync(async (req, res) => {
  const { organization } = req;
  const { name, image, address, phone, email, welcomeText, aboutUsText } =
    req.body;

  const organizationUpdated = await organization.update({
    name,
    image,
    address,
    phone,
    email,
    welcomeText,
    aboutUsText,
  });

  res.json({
    status: true,
    message: "La informacion de la organizacion ha sido actualizada",
    data: organizationUpdated,
  });
});

const getOrganizationById = catchAsync(async (req, res) => {
    const organizationObj = {
        name: req.organization.name,
        image: req.organization.image,
        phone: req.organization.phone,
        address: req.organization.addressgit,
        facebook: req.organization.urlFacebook,
        linkedin: req.organization.urlLinkedin,
        instagram: req.organization.urlInstagram
    };
    res.json({
        status: true,
        message: "La informacion de las organizaciones ha sido obtenida",
        data: organizationObj
    });
});

module.exports = {
  updateOrganization,
  getOrganizationById,
  getSlidesByOrganization,
  updateOrganization
};