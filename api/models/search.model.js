const db = require("../datasource/mysql");
const DB = require("../library/mysql.js");
const fields = ['id', 'id_question', 'search'].join(',');
const table = "search";

class Search extends DB {
    constructor(...args) {
        super(...args);
    }

    async getSearchResult (attr) {
        console.log('getSearchResult', attr);
        let sql = 'SELECT id_question, MATCH(search) AGAINST (? IN BOOLEAN MODE) as score ' +
            'FROM ' + this.table + ' WHERE (MATCH (search) AGAINST (? IN BOOLEAN MODE)) ' +
            'ORDER BY score DESC';
        return this.q(sql, attr)
    }
}

module.exports = new Search(db, table, fields);
