const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "user";
const fields = " name,mail,pass,ip_address,role_id,id";

class User extends DB {
  constructor(...args) {
    super(...args);
  }

  // Customized methods
  async matchUser(field, cond) {
    
    let resultQuery = await this.query(
      `SELECT COUNT(*) as count FROM user where ${field}= '${cond}' `
    );

    return resultQuery;
  }

  async updatePwd(mail, fields) {
    let query = ` UPDATE ${this.table} SET ? WHERE mail= ? `;
    return this.query(query, fields, mail);
  }

  async getInfosUser(login, password) {
    const WHERE_CLAUSE = `WHERE mail='${login}' AND pass='${password}'`;
    let resultQuery = await this.query(
      `SELECT ${this.fields}  FROM ${this.table} ${WHERE_CLAUSE}`
    );

    return resultQuery;
  }

  async checkLogin(login, password) {
    const fields = " count(id) as count   ";
    const WHERE_CLAUSE = `WHERE mail='${login}' AND pass='${password}'`;
    let resultQuery = await this.query(
      `SELECT COUNT(id) as count FROM ${this.table} ${WHERE_CLAUSE}`
    );
    return resultQuery;
  }

  async getUserWithRoles() {
   
    let resultQuery = await this.query(
      "SELECT name,mail,pass,ip_address,role_id,user.id, role.nom as role FROM user JOIN role ON user.role_id=role.id"
    );
    return resultQuery;
  }
}

module.exports = new User(db, table, fields);
