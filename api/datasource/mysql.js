const mysql = require("mysql");
const dotenv = require("dotenv").config();
class Database {
  init() {
    this.connection = mysql.createPool({
      user: 'trad',
      password: '123456',
      host: 'localhost',
      database: 'faqosdb',
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