const db = require("../../datasource/mysql");

class Question {
  static async getQuestions() {
    return db.query(
      "SELECT question.titre, question.contenu, question.id, reponse.created_by, COUNT(upvote.id_reponse) AS voteup FROM question JOIN reponse ON question.id = reponse.question_id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse WHERE question.disabled_at IS NULL GROUP BY question.titre, question.contenu, question.id, reponse.created_by"
    );
  }

  static async getQuestionsAnswered(id) {
    return db
      .query(
        "SELECT question.id AS question_id, question.titre, question.contenu, reponse.contenu AS reponse, user.name AS replyer, question.created_by AS asker, COUNT(upvote.id_reponse) as voteup FROM question JOIN reponse ON question.id = reponse.question_id JOIN user ON reponse.created_by = user.id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse WHERE question.id = ? AND reponse.disabled_at IS NULL GROUP BY question.id, question.titre, question.contenu, reponse.contenu, user.name, question.created_by",
        [parseInt(id)]
      )
      .then((res) => {
        return { res };
      });
  }

  static async postQuestion(titre, contenu, pseudo) {
    return db
      .query("INSERT INTO question (titre, contenu, created_by) VALUES (?)", [
        [titre, contenu, pseudo],
      ])
      .then((res) => {
        return { res };
      });
  }

  static async reportQuestion(id_question, ip, raison) {
    return db
      .query(
        `INSERT INTO report(id_question, ip, raison) SELECT ? FROM report WHERE (ip= ? and id_question= ? ) HAVING COUNT(*) = 0;`,
        [[id_question, ip, raison], [ip], [id_question]]
      )
      .then((res) => {
        return { res };
      });
  }

  static async upVote(id_question, ip) {
    return db
      .query(
        `INSERT INTO upvote(id_reponse, ip) SELECT ? FROM upvote WHERE (ip= ? and id_reponse= ? ) HAVING COUNT(*) = 0;`,
        [[id_question, ip], [ip], [id_question]]
      )
      .then((res) => {
        return { res };
      });
  }
}

module.exports = Question;
