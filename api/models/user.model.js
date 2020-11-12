const db = require("../datasource/mysql");

class UserModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const query = "SELECT name,mail,pass,ip_address,role_id FROM user";
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

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
}

  static addOne(fields) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO user (name,mail,role_id,pass,ip_address) VALUES ? ";
      db.query(query, [fields], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  static checkLogin(login,password) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT count(id) as count FROM user WHERE mail=? AND pass=?';
      db.query(query, [login,password], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }



}

module.exports = UserModel;
