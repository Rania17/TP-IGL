var Student = require('../Model/studentModel')

exports.getCpOneStudents = (req, res) => {
    console.log('get 1cp Students controller !')
    Student.getCpOneStudents((err, student) => {
        console.log(student)
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

exports.getCpTwoStudents = (req, res) => {
    console.log('get 2cp Students controller !')
    Student.getCpTwoStudents((err, student) => {
        console.log(student)
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

exports.getCsOneStudents = (req, res) => {
    console.log('get 1cs Students controller !')
    Student.getCsOneStudents((err, student) => {
        console.log(student)
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

exports.getCsTwoStudents = (req, res) => {
    console.log('get 2cs Students controller !')
    Student.getCsTwoStudents((err, student) => {
        console.log(student)
        if (err) {
            res.send(err)
        } else {
            res.send(student)
        }
    })
}

exports.getCsThreeStudents = (req, res) => {
    console.log('get 3cs Students controller !')
    Student.getCsThreeStudents((err, student) => {
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

    var newStudent = req.body.student
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

exports.updateStudent = (req, res) => {
    console.log('updateStudent controller !')
    var updatedStudent = req.body
    console.log(req.params.id)
    console.log(updatedStudent)
    Student.update(req.params.id, updatedStudent, (err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.json(updatedStudent)
        }
    })
}

exports.deleteStudent = (req, res) => {
    console.log('deleteStudent controller !')
    var student = req.body
    console.log(req.params.id)
    console.log(student)
    Student.remove(req.params.id, (err, student) => {
        if (err) {
            res.send(err)
        } else {
            res.json({"message": "Student deleted !"})
        }
    })
}