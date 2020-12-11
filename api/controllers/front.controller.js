const Question = require("../models/front.models");
const logger = require("../library/logger");

class QuestionController {
  static async getAll(req, res) {
    try {
      const listQuestions = await Question.getQuestions(req.query.id);
      res.send(listQuestions);
    } catch (err) {
      res.sendStatus(500);
      logger.error(err);
    }
  }

  static async getAllAnswered(req, res) {
    try {
      const listQuestionsAnswered = await Question.getQuestionsAnswered(
        req.query.id
      );
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
      logger.error(err);
    }
  }

  static async report(req, res) {
    const IP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    try {
      if (
        IP === undefined ||
        req.body.form.id === undefined ||
        req.body.form.raison === undefined
      ) {
        res.sendStatus(400);
      } else {
        const reported = await Question.reportQuestion(
          req.body.form.id,
          IP,
          req.body.form.raison
        );
        reported.isInsert === true ? res.sendStatus(201) : res.sendStatus(403);
      }
    } catch (err) {
      res.sendStatus(500);
      logger.error(err);
    }
  }

  static async vote(req, res) {
    const IP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;
    try {
      if (IP === undefined || req.body.vote.id === undefined) {
        res.sendStatus(400);
      } else {
        const voted = await Question.upVote(req.body.vote.id, IP);
        voted.isInsert === true ? res.sendStatus(201) : res.sendStatus(403);
      }
    } catch (err) {
      res.sendStatus(500);
      logger.error(err);
    }
  }
}
module.exports = QuestionController;
