var sql = require('./db.js')

var Student = (student) => {
    this.nom = student.nom
    this.prenom = student.prenom
    this.annee = student.annee
}

Student.creatStudent = (newStudent, result) => {
    sql.query("INSERT INTO students SET ?", newStudent, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId);
        }
    })
}

Student.getCpOneStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '1cp' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Student.getCpTwoStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '2cp' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Student.getCsOneStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '1cs' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Student.getCsTwoStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '2cs' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Student.getCsThreeStudents = (result) => {
    sql.query("SELECT * FROM students WHERE annee = '3cs' ", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Student.update = (id, student, result) => {
    sql.query("UPDATE students SET nom = ?, prenom = ?, annee = ? WHERE id = ?", [student.nom, student.prenom, student.annee, id], function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}

Student.remove = function (id, result) {
    sql.query("DELETE FROM students WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        }
        else {
            result(null, res)
        }
    })
}

module.exports = Student