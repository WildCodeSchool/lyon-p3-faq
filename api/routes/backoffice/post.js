const { Router } = require("express");
const router = Router();

const PostController = require("../../controllers/post.controller");

const validator = require("../../middleware/validator");
//const {checkResponse,checkIdUser} = require("../../middleware/validator");

/* ********************* Routes for Posts handling ********************* */

/* Add a response*/

router.post("/", validator.checkAddResponse, PostController.addResponse);

/* Display all questions & answers (including questions without answers)*/

router.get("/", PostController.getPosts);

/* Archive or publish question */

router.put(
  "/:id",
  validator.checkId,
  validator.checkAction,
  PostController.update
);

module.exports=router;

