const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8000


app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'nxv9tGXW5W',
    password: 'LqadDAMfQL',
    database: 'nxv9tGXW5W'
})

connection.connect()

var routes = require('./app/Routes/routes.js'); //importing route
routes(app); //register the route

app.listen(PORT, () => {
    console.log('APP running on port : ' + PORT)
})