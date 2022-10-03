const { catchAsync } = require("../utils/catchAsync.util");
const { Contacts } = require("../models");

const createContacts = catchAsync(async (req, res) => {
  const { body } = req;
  const contacts = await Contacts.create(body);
  res.status(201).json({
    status: true,
    message: "Contacto registrado exitosamente",
    data: { contacts }
  });
});

module.exports = {
  createContacts,
};
