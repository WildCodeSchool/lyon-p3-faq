const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const table = "role";
const fields = " nom";

class Role extends DB {
  constructor(...args) {
    super(...args);
  }


}

module.exports = new Role(db, table, fields);