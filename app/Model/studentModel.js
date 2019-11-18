var sql = require('./db.js')

var Student = (student) => {
    this.nom = student.nom
    this.prenom = student.prenom
    this.annee = student.annee
}

Student.creatStudent = (newStudent, result) => {
    sql.query("INSERT INTO students set ?", newStudent, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId);
        }
    })
}

Student.getAllStudents = (result) => {
    sql.query("SELECT * FROM students", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            console.log('Students: ', res)
            result(null, res)
        }
    })
}

module.exports = Student