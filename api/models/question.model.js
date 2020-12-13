const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "question";
const fields = ["id", "titre", "contenu", "created_by", "created_at"].join(",");

class Question extends DB {
  constructor(...fields) {
    super(...fields);
  }

  get() {
    const query =
      "SELECT question.titre, question.contenu, question.id, user.name AS replyer, COUNT(upvote.id_reponse) AS voteup FROM question JOIN reponse ON question.id = reponse.question_id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse JOIN user ON user.id = reponse.created_by WHERE question.disabled_at IS NULL GROUP BY question.titre, question.contenu, question.id, reponse.created_by";
    return this.query(query);
  }

  getId(id) {
    const query =
      "SELECT question.titre, question.contenu, question.id, user.name AS asker, COUNT(upvote.id_reponse) AS voteup FROM question JOIN reponse ON question.id = reponse.question_id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse JOIN user ON user.id = question.created_by WHERE question.disabled_at IS NULL AND question.id=? GROUP BY question.titre, question.contenu, question.id, reponse.created_by";
    return this.query(query, id);
  }

  getAnswered(id) {
    const query =
      "SELECT question.id AS question_id, question.titre, question.contenu, reponse.contenu AS reponse, user.name AS replyer, COUNT(upvote.id_reponse) as voteup FROM question JOIN reponse ON question.id = reponse.question_id JOIN user ON reponse.created_by = user.id LEFT JOIN upvote ON reponse.question_id=upvote.id_reponse WHERE question.id = ? AND reponse.disabled_at IS NULL GROUP BY question.id, question.titre, question.contenu, reponse.contenu, user.name, question.created_by";
    return this.query(query, id);
  }

  postQuestion(pseudo, mail, IP, titre, contenu) {
    const query =
      "INSERT INTO user (name, mail, pass, ip_address, role_id)  VALUES (?)";
    return this.query(query, [pseudo, mail, "!!pswd!!", IP, 5]).then((res) => {
      const query =
        "INSERT INTO question (titre, contenu, created_by) VALUES (?)";
      return this.query(query, [titre, contenu, res.insertId]);
    });
  }
}

module.exports = new Question(db, table, fields);
