const { Router } = require("express");
const db = require("../../datasource/mysql");
const router = Router();
const PostController = require("../../controllers/post.controller");

/* ********************* Routes for Posts handling ********************* */

/* Add a response*/

router.post("/", PostController.addResponse);

/* Display all questions & answers (including questions without answers)*/

router.get("/", PostController.getPosts);

/* Archive or publish question */

router.put("/:id", (req, res) => {
  if (req.body.action === "update") {
    PostController.updatePost(req, res);
  } else {
    PostController.updatePostStatus(req, res);
  }
});

module.exports = router;
