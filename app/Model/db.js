const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '))))',
    database: 'igl'
})

connection.connect(function(err) {
    if (err) throw err
})

module.exports = connection