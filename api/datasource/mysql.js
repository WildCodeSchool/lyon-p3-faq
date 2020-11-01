
const mysql = require('mysql');
const dotenv = require('dotenv').config();
module.exports    = mysql.createConnection({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE
});


