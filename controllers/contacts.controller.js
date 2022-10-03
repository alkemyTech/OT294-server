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

const backOficeContacts = catchAsync(async (req, res) => {
  const contacts = await Contacts.find({attributes: ["id", "name", "email", "phone", "message"]});
  res.status(200).json({
    status: true,
    message: "Contactos encontrados",
    data: { contacts }
  });
})

module.exports = {
  createContacts,
  backOficeContacts
};
