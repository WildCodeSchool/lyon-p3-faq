const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "question";
const fields = ['id', 'titre', 'contenu', 'created_by', 'created_at'].join(',');

class Question extends DB {
  constructor(...fields) {
    super(...fields)
  }

  static async get(id) {
    return id === undefined
      ? db.query(
          "SELECT question.titre, question.contenu, question.id, user.name AS replyer, COUNT(upvote.id_reponse) AS voteup FROM question JOIN reponse ON question.id = reponse.question_id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse JOIN user ON user.id = reponse.created_by WHERE question.disabled_at IS NULL GROUP BY question.titre, question.contenu, question.id, reponse.created_by"
        )
      : db.query(
          "SELECT question.titre, question.contenu, question.id, user.name AS asker, COUNT(upvote.id_reponse) AS voteup FROM question JOIN reponse ON question.id = reponse.question_id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse JOIN user ON user.id = question.created_by WHERE question.disabled_at IS NULL AND question.id=? GROUP BY question.titre, question.contenu, question.id, reponse.created_by",
          [parseInt(id)]
        );
  }

  static async getAnswered(id) {
    return db
      .query(
        "SELECT question.id AS question_id, question.titre, question.contenu, reponse.contenu AS reponse, user.name AS replyer, COUNT(upvote.id_reponse) as voteup FROM question JOIN reponse ON question.id = reponse.question_id JOIN user ON reponse.created_by = user.id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse WHERE question.id = ? AND reponse.disabled_at IS NULL GROUP BY question.id, question.titre, question.contenu, reponse.contenu, user.name, question.created_by",
        [parseInt(id)]
      )
      .then((res) => {
        return { res };
      });
  }

  static async report(id_question, ip, raison) {
    return db
      .query(
        `INSERT INTO report(id_question, ip, raison) SELECT ? FROM report WHERE (ip= ? and id_question= ? ) HAVING COUNT(*) = 0;`,
        [[id_question, ip, raison], [ip], [id_question]]
      )
      .then((res) => {
        const isInsert = res.affectedRows === 1;
        return { res, isInsert };
      });
  }

  static async upVote(id_question, ip) {
    return db
      .query(
        `INSERT INTO upvote(id_reponse, ip) SELECT ? FROM upvote WHERE (ip= ? and id_reponse= ? ) HAVING COUNT(*) = 0;`,
        [[id_question, ip], [ip], [id_question]]
      )
      .then((res) => {
        const isInsert = res.affectedRows === 1;
        return { res, isInsert };
      });
  }
}

module.exports = new Question(db, table, fields);
