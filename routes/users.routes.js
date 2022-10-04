const express = require("express");

//Controllers
const { getAllUsers, createUser, loginUser, updateUser, deleteUser } = require("../controllers/users.controller");

// Middlewares
const { createUserValidators } = require("../validators/users.validator");
const { authAdmin } = require("../middlewares/authAdmin.middleware");
const { userExists } = require("../middlewares/users.middleware");

const router = express.Router();

/* GET users listing. */
router.get("/", authAdmin, getAllUsers);

/* POST user registration. */
router.post("/auth/register", createUserValidators, createUser);

/* POST users authentication. */
router.post("/auth/login", loginUser);

/* PATCH  users updated */
router.patch("/users/:id", userExists, updateUser);

/* DELETE  user */
router.delete("/:id", userExists, deleteUser);

module.exports = router;
