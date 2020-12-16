const db = require("../datasource/mysql");
class DB {
  constructor(db, table, fields) {
    this.db = db;
    this.table = table;
    this.fields = fields;
  }

  async query(query, ...params) {
    return new Promise((resolve, reject) => {
      db.query(query, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  async read(WHERE_CLAUSE, id) {
    if (WHERE_CLAUSE !== undefined || id !== undefined) {
      const query = `SELECT ${this.fields} FROM ${this.table} ${WHERE_CLAUSE} ${id}`;
      return this.query(query);
    } else {
      const query = `SELECT ${this.fields} FROM ${this.table} `;
      return this.query(query);
    }
  }

  async delete(id) {
    const query = `DELETE  FROM ${this.table} WHERE id=${id} `;
    return this.query(query);
  }

  async create(fields_table) {
    const query = ` INSERT INTO  ${this.table} (${this.fields}) VALUES ?  `;
    return this.query(query, fields_table);
  }

  async update(id, fields) {
    const query = ` UPDATE ${this.table} SET ? WHERE id= ? `;
    return this.query(query, fields, id);
  }
}
module.exports = DB;
