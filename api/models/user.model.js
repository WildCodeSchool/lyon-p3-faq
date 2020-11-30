const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "user";
const fields = " name,mail,pass,ip_address,role_id,id";

class User extends DB {
  constructor(...args) {
    super(...args);
  }

<<<<<<< HEAD
  // Customized methods
  async matchUser(id) {
    let resultQuery = await this.query(`SELECT COUNT(id) as count FROM user where id=${id}`);
    return resultQuery;
=======
  static one(id, method, fields) {
    return new Promise((resolve, reject) => {
      if (method === "DELETE") {
        const queryField = "DELETE  FROM user WHERE id= ?";
        db.query(queryField, id, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }

      if (method === "GET") {
        const queryField =
          "SELECT name,mail,pass,ip_address,role_id FROM user WHERE id=?";
        db.query(queryField, id, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }

      if (method === "PUT") {
        const queryField = "UPDATE user SET ? WHERE id= ?";
        db.query(queryField, [fields, id], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  }

  static matchDB(id) {
    return new Promise((resolve, reject) => {
      const query = " SELECT COUNT(id) as count FROM user WHERE id= ?";
      db.query(query, id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
>>>>>>> fixing issues by MM
  }

  async checkLogin(login, password) {
    const fields = " count(id) as count   ";
    const WHERE_CLAUSE = `WHERE mail='${login}' AND pass='${password}'`;
    let resultQuery = await this.query(
      `SELECT COUNT(id) as count FROM ${this.table} ${WHERE_CLAUSE}`);
    return resultQuery;
  }

  async getUserWithRoles() {
    console.log("getUserWithRoles MODEL")
    let resultQuery = await this.query('SELECT name,mail,pass,ip_address,role_id,user.id, role.nom as role FROM user JOIN role ON user.role_id=role.id');
    return resultQuery;
  }

}

module.exports = new User(db, table, fields);
