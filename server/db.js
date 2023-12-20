const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '170816br',
    database: 'projetoviagem'
})

module.exports = db;