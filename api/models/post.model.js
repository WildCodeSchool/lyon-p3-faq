const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "question";

class Post extends DB {
  constructor(...args) {
    super(...args);
  }

  getAll() {
    const query =
      "SELECT q.titre,q.contenu as contenu_question,q.created_by,q.created_at, reponse.contenu as contenu_reponse from question as q  LEFT JOIN reponse ON q.id=reponse.question_id";
    return this.query(query);
  }

  addOne(fields) {
    const query =
      "INSERT INTO reponse (question_id,contenu,created_by) VALUES ? ";
    return this.query(query, fields);
  }

  updatePost(idQuestion, fields) {
    const query =
      "UPDATE question  LEFT JOIN reponse  ON question.id = reponse.question_id SET ? WHERE question.id= ?";
    return this.query(query, fields, idQuestion);
  }
}

module.exports = new Post(db, table);
