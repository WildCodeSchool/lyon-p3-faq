const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const UserController = require("../../controllers/user.controller");
const validator = require('../../lib/validator')

/* ********************* Routes for login ********************* */

router.post("/",validator.signup, UserController.login);

module.exports = router;
