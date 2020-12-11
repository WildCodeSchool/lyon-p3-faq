const { Router } = require("express");
const router = Router();
const UserController = require("../../controllers/user.controller");
const validator = require('../../middleware/validator')

router.post("/",validator.signup, UserController.login);

module.exports = router;
