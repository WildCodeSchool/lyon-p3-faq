const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const UserController = require("../../controllers/user.controller");
const validator = require('../../lib/utils')

/* ********************* Routes for users handling ********************* */

/* GET all users. */
router.get("/", UserController.getUsers);

/* GET one user */

router.get("/:id",validator.checkIdUser, UserController.one)

/* delete one user */

router.delete("/:id", validator.checkIdUser,UserController.one);

/* Update one user */

router.put("/:id",validator.checkIdUser,validator.checkUser, UserController.one);

/* add one user */

router.post("/", validator.checkUser, UserController.addUser);


module.exports = router;
