const { catchAsync } = require("../utils/catchAsync.util");
const { Contacts } = require("../models");
const { Email } = require("../utils/email.util");
const createContacts = catchAsync(async (req, res) => {
  const { body } = req;
  const contacts = await Contacts.create(body);
  await new Email(body.email).sendWelcome(body.name);
  res.status(201).json({
    status: true,
    message: "Contacto registrado exitosamente",
    data: { contacts },
  });
});

module.exports = {
  createContacts,
};
