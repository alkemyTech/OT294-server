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
const listContacts = catchAsync(async (req, res) => {
    const contacts = await Contacts.findAll();
    res.status(200).json({status: true, message: "Lista de contactos",data: { contacts }});
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
  listContacts,
  backOficeContacts
};
