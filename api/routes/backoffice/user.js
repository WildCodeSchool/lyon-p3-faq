const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const UserController = require("../../controllers/user.controller");
const validator = require('../../middleware/validator')
const { verifyToken} = require("../../services/jwt")

/* ********************* Routes for users handling ********************* */


/* GET  users role */

router.get("/roles",verifyToken, UserController.getRoles);

/* GET all users. */

router.get("/", verifyToken,UserController.getUsers);

/* GET one user */

router.get("/:id", verifyToken, validator.checkId, UserController.getOne)

/* delete one user */

router.delete("/:id", verifyToken,validator.checkId,UserController.deleteOne);

/* Update one user */

router.put("/:id",verifyToken,validator.checkId,validator.checkUser, UserController.updateOne);


/* add one user */

router.post("/", verifyToken,validator.checkUser, UserController.addUser);

/* change password */

router.patch("/", validator.checkupdatePassword, UserController.updatePassword);


module.exports = router;
