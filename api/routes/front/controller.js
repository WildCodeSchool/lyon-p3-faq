const Question = require("./models");
const logger = require("morgan");

class QuestionController {
  static async getAll(req, res) {
    try {
      const listQuestions = await Question.getQuestions();
      res.send(listQuestions);
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
    }
  }

  static async getAllAnswered(req, res) {
    try {
      const listQuestionsAnswered = await Question.getQuestionsAnswered(
        req.query.id
      );
      res.send(listQuestionsAnswered);
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
    }
  }

  static async postQuestion(req, res) {
    try {
      if (
        req.body.form.titre != undefined &&
        req.body.form.contenu != undefined &&
        req.body.form.pseudo != undefined
      ) {
        if (
          req.body.form.titre.length <= 100 &&
          req.body.form.contenu.length <= 300 &&
          req.body.form.pseudo.length <= 16
        ) {
          const postedQuestion = await Question.postQuestion(
            req.body.form.titre,
            req.body.form.contenu,
            req.body.form.pseudo
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
      console.log(err);
    }
  }

  static async report(req, res) {
    const IP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    try {
      if (IP === undefined || req.body.form.id === undefined) {
        res.sendStatus(400);
      } else {
        const reported = await Question.reportQuestion(
          req.body.form.id,
          IP,
          req.body.form.raison
        );
        res.sendStatus(201);
      }
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
    }
  }
}
module.exports = QuestionController;
