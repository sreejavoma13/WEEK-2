const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/search", userController.searchUser);

module.exports = router;

