const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'nxv9tGXW5W',
    password: 'LqadDAMfQL',
    database: 'nxv9tGXW5W'
})

connection.connect(function(err) {
    if (err) throw err
})

module.exports = connection