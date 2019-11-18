var Student = require('../Model/studentModel')

exports.getAllStudents = (req, res) => {
    console.log('getAllStudents controller !')
    Student.getAllStudents((err, student) => {
        console.log(student)
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}