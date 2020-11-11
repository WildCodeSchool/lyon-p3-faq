const express = require("express");
const router = express.Router();
const db = require("../../datasource/mysql");
const QuestionController = require("./controller");

router.get("/", QuestionController.getAll);
router.get("/answered", QuestionController.getAllAnswered);
router.post("/", QuestionController.postQuestion);

module.exports = router;

