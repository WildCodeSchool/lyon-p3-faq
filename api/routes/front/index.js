const express = require("express");
const router = express.Router();
const QuestionController = require("../../controllers/front.controller");
const rateLimit = require("express-rate-limit");

const limit = rateLimit({
  windowMs: 60 * 60 * 5000, // 5 hours
  max: 5, // 5 requests
});

router.get("/", QuestionController.getAll);
router.get("/answered", QuestionController.getAllAnswered);
router.post("/", QuestionController.postQuestion);
router.post("/report", limit, QuestionController.report);
router.post("/vote", limit, QuestionController.vote);

module.exports = router;
