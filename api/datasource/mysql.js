const mysql = require("mysql");
const dotenv = require("dotenv").config();

class DB {

  init() {
    this.connection = mysql.createPool({
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
    });
    return this;
  }

  async query(query, ...params) {
    
    return new Promise((resolve, reject) => {
      this.connection.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async queryt(...args) {
    return new Promise((resolve, reject) => {
      this.connection.query(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

module.exports = new DB().init();
