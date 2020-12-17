const { Router } = require('express');
const router = Router();
const PostController = require('../../controllers/post.controller');
const validator = require('../../middleware/validator');
const { verifyToken} = require("../../services/jwt")
//const {checkResponse,checkIdUser} = require("../../middleware/validator");

/* ********************* Routes for Posts handling ********************* */



/* Add a response*/

router.post('/', PostController.addPost); //TODO : Add express-validator on this route

/* Display all questions & answers (including questions without answers)*/

router.get('/', PostController.getPosts);

/* Archive or publish question */

router.put(
  "/:id",
  verifyToken,
  validator.checkId,
  validator.checkAction,
  PostController.update
);

module.exports=router;

