const Question = require("../models/question.model");
const logger = require("../library/logger");

class QuestionController {
  static async getAll(req, res) {
    try {
      const listQuestions = await Question.get();
      res.send(listQuestions);
    } catch (err) {
      res.sendStatus(500);
      logger.error(err);
      console.log(err);
    }
  }

  static async getById(req, res) {
    try {
      const questionId = await Question.getId(parseInt(req.query.id));
      res.send(questionId);
    } catch (err) {
      res.sendStatus(500);
      logger.error(err);
      console.log(err);
    }
  }

  static async getAllAnswered(req, res) {
    try {
      const listQuestionsAnswered = await Question.getAnswered(req.query.id);
      res.send(listQuestionsAnswered);
    } catch (err) {
      logger.error(err);
      res.sendStatus(500);
    }
  }

  static async postQuestion(req, res) {
    const IP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    try {
      if (
        req.body.form.titre != undefined &&
        req.body.form.contenu != undefined &&
        req.body.form.pseudo != undefined &&
        req.body.form.mail != undefined &&
        IP != undefined
      ) {
        if (
          req.body.form.titre.length <= 100 &&
          req.body.form.contenu.length <= 300 &&
          req.body.form.pseudo.length <= 16
        ) {
          const postedQuestion = await Question.postQuestion(
            req.body.form.titre,
            req.body.form.contenu,
            req.body.form.pseudo,
            req.body.form.mail,
            IP
          );
          res.sendStatus(201);
        } else if (
          req.body.form.titre.length > 100 ||
          req.body.form.contenu.length > 300 ||
          req.body.form.pseudo.length > 16
        ) {
          res.sendStatus(400);
        }
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      res.sendStatus(500);
      console.log(err)
      logger.error(err);
    }
  }
}
module.exports = QuestionController;
