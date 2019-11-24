const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '))))',
    database: 'igl'
})

connection.connect()

var routes = require('./app/Routes/routes.js'); //importing route
routes(app); //register the route

app.listen(PORT, () => {
    console.log('APP running on port : ' + PORT)
})