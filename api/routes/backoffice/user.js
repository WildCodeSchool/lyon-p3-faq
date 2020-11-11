const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const UserController = require("../../controllers/user.controller");

/* ********************* Routes for users handling ********************* */

/* GET all users. */
router.get("/", UserController.getUsers);

/* GET one user */

router.get("/:id", UserController.one)

/* delete one user */

router.delete("/:id", UserController.one);

/* Update one user */

router.put("/:id", UserController.one);

/* add one user */

router.post("/",  UserController.addUser);


module.exports = router;
