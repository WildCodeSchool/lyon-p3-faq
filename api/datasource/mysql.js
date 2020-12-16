const mysql = require("mysql");
require("dotenv").config();
module.exports = mysql.createPool({
    user: "root",
  password: "",
  host: "localhost",
  database: "faqosdbpres",
});
