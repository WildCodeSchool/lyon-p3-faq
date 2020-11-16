const mysql = require("mysql");
const dotenv = require("dotenv").config();


class DB {
  static query(query) {
    return new Promise((resolve, reject) => {
     
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}


  const connection = mysql.createPool({
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
    })
   

module.exports = {DB, connection};


