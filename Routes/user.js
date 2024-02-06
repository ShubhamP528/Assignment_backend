const express = require("express");
const router = express.Router();

// user Controller
const { login, Signup } = require("../Controller/user");

// login
router.post("/login", login);

//signup
router.post("/signup", Signup);

module.exports = router;
