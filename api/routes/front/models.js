const db = require("../../datasource/mysql");

class Question {
  static async getQuestions() {
    return db.query(
      "SELECT question.titre, question.contenu, question.id, reponse.created_by FROM question JOIN reponse ON question.id = reponse.question_id WHERE question.disabled_at IS NULL"
    );
  }

  static async getQuestionsAnswered(id) {
    return db
      .query(
        "SELECT question.titre, question.contenu, reponse.contenu AS reponse, reponse.created_by AS replyer, question.created_by AS asker FROM question JOIN reponse ON question.id = reponse.question_id WHERE question.id = ? AND reponse.disabled_at IS NULL",
        [parseInt(id)]
      )
      .then((res) => {
        return { res };
      });
  }

  static async postQuestion(titre, contenu) {
    return db
      .query("INSERT INTO question (titre, contenu) VALUES (?)", [
        [titre, contenu],
      ])
      .then((res) => {
        return { res };
      });
  }
}
module.exports = Question;
