const mysql = require('mysql');
require('dotenv').config();
console.log(process.env.MYSQL_HOST);
module.exports = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE
});
