const db = require("../datasource/mysql");

class PostModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const query =
        "SELECT q.titre,q.contenu as contenu_question,q.created_by,q.created_at, reponse.contenu as contenu_reponse from question as q  LEFT JOIN reponse ON q.id=reponse.question_id";
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static addOne(fields) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO reponse (question_id,contenu,created_by) VALUES ? ";
      db.query(query, [fields], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static archivePost(fields, idQuestion) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE question SET ? WHERE id= ?";
      db.query(query, [fields, idQuestion], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static publishPost(fields, idQuestion) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE question SET ? WHERE id= ?";
      db.query(query, [fields, idQuestion], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = PostModel;
