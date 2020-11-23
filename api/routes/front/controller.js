const Question = require("./models");

class QuestionController {
  static async getAll(req, res) {
    try {
      const listQuestions = await Question.getQuestions();
      res.send(listQuestions);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  static async getAllAnswered(req, res) {
    try {
      const listQuestionsAnswered = await Question.getQuestionsAnswered(
        req.query.id
      );

      res.send(listQuestionsAnswered);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  static async postQuestion(req, res) {
    try {
      if (req.body.titre.length <= 100 && req.body.contenu.length <= 300) {
        const postedQuestion = await Question.postQuestion(
          req.body.titre,
          req.body.contenu
        );
        res.send(postedQuestion);
      } else if (req.body.titre.length > 100 || req.body.contenu.length > 300) {
        res.sendStatus(412);
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}
module.exports = QuestionController;
