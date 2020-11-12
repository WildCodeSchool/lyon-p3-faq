const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const PostController = require("../../controllers/post.controller");
const validator = require("../../middleware/validator");

/* ********************* Routes for Posts handling ********************* */

/* Add a response*/

router.post("/", validator.checkResponse, PostController.addResponse);

/* Display all questions & answers (including questions without answers)*/

router.get("/", PostController.getPosts);

/* Archive or publish question */

router.put("/:id", validator.checkId, validator.checkAction, (req, res) => {
  if (req.body.action === "update") {
    validator.checkResponse, PostController.updatePost(req, res);
  } else {
    validator.checkIdUser, PostController.updatePostStatus(req, res);
  }
});

module.exports = router;
