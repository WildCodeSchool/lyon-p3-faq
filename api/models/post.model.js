const DB = require("../datasource/mysql");

class PostModel {
  static async getAll() {
    const query =
      "SELECT q.titre,q.contenu as contenu_question,q.created_by,q.created_at, reponse.contenu as contenu_reponse from question as q  LEFT JOIN reponse ON q.id=reponse.question_id";
    let resultQuery = await DB.query(query);
    return resultQuery;
  }

  static async addOne(fields) {
    const query =
      "INSERT INTO reponse (question_id,contenu,created_by) VALUES ? ";
    let resultQuery = await DB.query(query, fields);
    return resultQuery;
  }

  static async archivePost(fields, idQuestion) {
    const query = "UPDATE question SET ? WHERE id= ?";
    let resultQuery = await DB.query(query, fields, idQuestion);
    return resultQuery;
  }

  static async publishPost(fields, idQuestion) {
    const query = "UPDATE question SET ? WHERE id= ?";
    let resultQuery = await DB.query(query, fields, idQuestion);
    return resultQuery;
  }

  static async update(fields, idQuestion) {
    const query =
      "UPDATE question  LEFT JOIN reponse  ON question.id = reponse.question_id SET ? WHERE question.id= ?";
    let resultQuery = await DB.query(query, fields, idQuestion);
    return resultQuery;
  }
}

module.exports = PostModel;
