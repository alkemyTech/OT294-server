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

module.exports = {
  getSlidesByOrganization,
  updateOrganization,
};
