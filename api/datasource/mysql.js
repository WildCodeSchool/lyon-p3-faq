const mysql = require("mysql");
const dotenv = require("dotenv").config();
class Database {
  init() {
    this.connection = mysql.createPool({
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      localAddress: process.env.MYSQL_LOCALADDRESS
    })
    return this;
  }

  async query (...args) {
    return new Promise((resolve, reject) => {
      this.connection.query(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

module.exports = (new Database().init())
