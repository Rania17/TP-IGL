var sql = require('./db.js')

var Teacher = (teacher) => {
    this.nom = teacher.nom
    this.prenom = teacher.prenom
}

Teacher.creatTeacher = (newTeacher, result) => {
    sql.query("INSERT INTO teachers SET ?", newTeacher, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId);
        }
    })
}

Teacher.getAllTeachers = (result) => {
    sql.query("SELECT * FROM teachers", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            console.log('teachers: ', res)
            result(null, res)
        }
    })
}

module.exports = Teacher