
const mysql = require("mysql");


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
          console.log("reject")
          reject(err);
        } else {
          console.log("result")
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

  async read(table, fields, WHERE_CLAUSE, id) {

    if (WHERE_CLAUSE !== undefined || id !== undefined ) {
     
    const query = `SELECT ${fields} FROM ${table} ${WHERE_CLAUSE} ${id}`;
    console.log("query : ",query)
    return this.query(query);
   
  } else {

    const query = `SELECT ${fields} FROM ${table} `
    return this.query(query);
  }


  
  }

  async delete(table, id) {
    const query = `DELETE  FROM ${table} WHERE id=${id} `;
    return this.query(query);
  }

  async create(table, fields_table, fields) {
    const query = ` INSERT INTO  ${table} ${fields_table} VALUES ?  `;
    return this.query(query, fields);
  }

  async update(table, id, fields) {
    const query = ` UPDATE ${table} SET ${fields} WHERE id= ${id} `;

    return this.query(query);
  }
}
module.exports = new DB().init();
