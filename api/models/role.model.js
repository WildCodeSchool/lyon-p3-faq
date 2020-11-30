const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "role";
const fields = " nom";

class User extends DB {
  constructor(...args) {
    super(...args);
  }


}

module.exports = new User(db, table, fields);