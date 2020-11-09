const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const UserController = require("../../controllers/user.controller");

/* ********************* Routes for users handling ********************* */

/* GET all users. */
router.get("/", (req, res, next) => {
  UserController.Users(req, res, "all", "get");
});

/* GET one user */

router.get("/:id", (req, res, next) => {
  UserController.Users(req, res, "one", "get");
});

/* delete one user */

router.delete("/:id", (req, res, next) => {
  UserController.Users(req, res, "one", "delete");
});

/* Update one user */

router.put("/:id", (req, res, next) => {
  UserController.Users(req, res, "one", "put");
});

/* add one user */

router.post("/", (req, res, next) => {
  UserController.addUser(req, res);
});

module.exports = router;
