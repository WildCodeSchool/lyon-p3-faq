const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "user";
const fields = " name,mail,pass,ip_address,role_id";

class UserModel extends DB {
  constructor(...args) {
    super(...args);
  }

  // Customized methods
  async matchUser(id) {
    let resultQuery = await this.query(`SELECT COUNT(id) as count FROM user where id=${id}`);
    return resultQuery;
  }

  async checkLogin(login, password) {
    const fields = " count(id) as count   ";
    const WHERE_CLAUSE = `WHERE mail='${login}' AND pass='${password}'`;
    let resultQuery = await this.query(
      `SELECT COUNT(id) as count FROM ${this.table} ${WHERE_CLAUSE}`);
    return resultQuery;
  }
}

module.exports = new UserModel(db, table, fields);
