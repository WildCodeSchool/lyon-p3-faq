const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const UserController = require("../../controllers/user.controller");
const validator = require('../../middleware/validator')

/* ********************* Routes for users handling ********************* */


/* GET  users role */

router.get("/roles", UserController.getRoles);

/* GET all users. */

router.get("/", UserController.getUsers);

/* GET one user */

router.get("/:id",validator.checkId, UserController.getOne)

/* delete one user */

router.delete("/:id", validator.checkId,UserController.deleteOne);

/* Update one user */

router.put("/:id",validator.checkId,validator.checkUser, UserController.updateOne);


/* add one user */

router.post("/", validator.checkUser, UserController.addUser);

/* change password */

router.patch("/", validator.checkupdatePassword, UserController.updatePassword);


module.exports = router;
