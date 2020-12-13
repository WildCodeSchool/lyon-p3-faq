const express = require("express");
const router = express.Router();
const QuestionController = require("../../controllers/question.controller");
const VoteController = require("../../controllers/vote.controller");
const ReportController = require("../../controllers/report.controller");

const rateLimit = require("express-rate-limit");

const limit = rateLimit({
  windowMs: 60 * 60 * 5000, // 5 hours
  max: 5, // 5 requests
});

router.get("/", QuestionController.getAll);
router.get("/id", QuestionController.getById);
router.get("/answered", QuestionController.getAllAnswered);
router.post("/", QuestionController.postQuestion);
router.post("/report", limit, ReportController.report);
router.post("/vote", limit, VoteController.vote);

module.exports = router;
