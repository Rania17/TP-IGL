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

exports.addStudent = (req, res) => {
    console.log('addStudent controller !')


    var newStudent = req.body
    console.log(newStudent)

    if (!newStudent.nom || !newStudent.prenom || !newStudent.annee) {
        res.status(400).send({ error:true, message: 'Please provide nom/prenom/annee' });
    }
    else {
        Student.creatStudent(newStudent, (err, student) => {
            if (err) {
                res.send(err)
            } else {
                res.json(newStudent)
            }
        })
    }
}