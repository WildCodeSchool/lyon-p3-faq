const { connection } = require("../datasource/mysql");
const { DB } = require("../datasource/mysql");

class UserModel {
  static async getAll() {
    const query = "SELECT name,mail,pass,ip_address,role_id FROM user";
    let resultQuery = await DB.query(query);
    return resultQuery;
  }

  static async one(id, method, fields) {
    if (method === "DELETE") {
      const query = "DELETE  FROM user WHERE id= ?";
      let resultQuery = await DB.query(query, id);
      return resultQuery;
    }

    if (method === "GET") {
      const query =
        "SELECT name,mail,pass,ip_address,role_id FROM user WHERE id=?";
      let resultQuery = await DB.query(query, id);
      return resultQuery;
    }

    if (method === "PUT") {
      const query = "UPDATE user SET ? WHERE id= ?";
      let resultQuery = await DB.query(query, fields, id);
      return resultQuery;
    }
  }

  static async matchDB(id) {
    const query = " SELECT COUNT(id) as count FROM user WHERE id= ?";
    let resultQuery = await DB.query(query, id);
    return resultQuery;
  }

  static async addOne(fields) {
    const query =
      "INSERT INTO user (name,mail,role_id,pass,ip_address) VALUES ? ";
    let resultQuery = await DB.query(query, fields);
    return resultQuery;
  }

  static async checkLogin(login, password) {
    const query = "SELECT count(id) as count FROM user WHERE mail=? AND pass=?";
    let resultQuery = await DB.query(query, login, password);
    return resultQuery;
  }
}

module.exports = UserModel;
