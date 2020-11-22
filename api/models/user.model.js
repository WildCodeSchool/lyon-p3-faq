const DB = require("../datasource/mysql");
const table = "user";
const fields = " name,mail,pass,ip_address,role_id";

class UserModel {
  static async getAll() {
    let resultQuery = await DB.read(table, fields);
    return resultQuery;
  }

  static async getOne(id) {
    const WHERE_CLAUSE = "WHERE id=";
    let resultQuery = await DB.read(table, fields, WHERE_CLAUSE, id);
    return resultQuery;
  }

  static async deleteOne(id) {
    let resultQuery = await DB.delete(table, id);
    return resultQuery;
  }

  static async updateOne(id, fields) {
    let resultQuery = await DB.update(table, id, fields);
    return resultQuery;
  }

  static async matchDB(id) {
    const fields = " COUNT(id) as count";
    const WHERE_CLAUSE = `WHERE id=`;
    let resultQuery = await DB.read(table, fields, WHERE_CLAUSE,id);
    return resultQuery;
  }

  static async addOne(fields) {
    let resultQuery = await DB.create(table, fields_table, fields);
    return resultQuery;
  }

  static async checkLogin(login, password) {
    const fields = " count(id) as count   ";
    const WHERE_CLAUSE = `WHERE mail=${login} AND pass=${password}`;
    let resultQuery = await DB.read(table, fields, WHERE_CLAUSE);
    return resultQuery;
  }
}

module.exports = UserModel;
