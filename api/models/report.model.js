const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "question";
const fields = ["id", "titre", "contenu", "created_by", "created_at"].join(",");

class Report extends DB {
  constructor(...fields) {
    super(...fields);
  }

  report(id_question, ip, raison) {
    const query =
      "INSERT INTO report(id_question, ip, raison) SELECT ? FROM report WHERE (ip= ? and id_question= ? ) HAVING COUNT(*) = 0";
    return this.query(
      query,
      [id_question, ip, raison],
      [ip],
      [id_question]
    ).then((res) => {
      const isInsert = res.affectedRows !== 0;
      return { isInsert };
    });
  }
}

module.exports = new Report(db, table, fields);
