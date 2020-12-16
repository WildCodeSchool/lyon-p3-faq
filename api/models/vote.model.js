const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "question";
const fields = ["id", "titre", "contenu", "created_by", "created_at"].join(",");

class Vote extends DB {
  constructor(...fields) {
    super(...fields);
  }

  upVote(id_question, ip) {
    const query =
      "INSERT INTO upvote(id_reponse, ip) SELECT ? FROM upvote WHERE (ip= ? and id_reponse= ? ) HAVING COUNT(*) = 0";
    return this.query(query, [id_question, ip], [ip], [id_question]).then(
      (res) => {
        const isInsert = res.affectedRows !== 0;
        return { isInsert };
      }
    );
  }
}

module.exports = new Vote(db, table, fields);
