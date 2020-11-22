const db = require("../../datasource/mysql");

class Question {
  static async getQuestions() {
    return db.query(
      "SELECT question.titre, question.contenu, reponse.created_by FROM question JOIN reponse ON question.id = reponse.question_id"
    );
  }

  static async getQuestionsAnswered() {
    return db.query(
      "SELECT question.titre, question.contenu, reponse.contenu AS reponse FROM question JOIN reponse ON question.id = reponse.question_id"
    );
  }

  static async postQuestion(titre, contenu) {
    return db
      .query("INSERT INTO question (titre, contenu) VALUES (?)", [[titre, contenu]])
      .then((res) => {
        return {res};
      });
  }
}
module.exports = Question;
