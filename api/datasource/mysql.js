const mysql = require("mysql");
const dotenv = require("dotenv").config();

class DB {

  
  static query(query, ...params) {
    return new Promise((resolve, reject) => {
      connection.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}


const connection   = mysql.createConnection({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE
});




module.exports = {DB, connection};
