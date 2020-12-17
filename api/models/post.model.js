const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "question";

class Post extends DB {
  constructor(...args) {
    super(...args);
  }

  getAll() {
    const query =
      "SELECT q.id,q.titre,q.contenu as contenu_question, reponse.contenu as contenu_reponse,q.created_by,q.created_at, q.disabled_at , q.publicated_at  from question as q  LEFT JOIN reponse ON q.id=reponse.question_id";
    return this.query(query);
  }

  addResponse(fields) {
    const query =
      "INSERT INTO reponse (question_id,contenu,created_by,created_at) VALUES ? ";
    return this.query(query, fields)
    .then(res=> { 
      const getDatas="SELECT question.titre, question.contenu, reponse.contenu FROM question JOIN reponse ON question.id=reponse.question_id WHERE reponse.question_id = 49"
    });
  }

  addQuestion(fields) {
    const query = "INSERT INTO question (titre,contenu,created_by) VALUES ? ";
    return this.query(query, fields);
  }

  updatePost(idQuestion, fields) {
    const query =
      "UPDATE question  LEFT JOIN reponse  ON question.id = reponse.question_id SET ? WHERE question.id= ?";

    return this.query(query, fields, idQuestion);
  }
}

module.exports = new Post(db, table);
