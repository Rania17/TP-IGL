var Teacher = require('../Model/teacherModel')

exports.getAllTeachers = (req, res) => {
    console.log('getAllTeachers controller !')
    Teacher.getAllTeachers((err, teacher) => {
        console.log(teacher)
        if (err) {
            res.send(err)
        } else {
            res.send(teacher)
        }
    })
}

exports.addTeacher = (req, res) => {
    console.log('addTeacher controller !')

    var newTeacher = req.body
    console.log(newTeacher)

    if (!newTeacher.nom || !newTeacher.prenom) {
        res.status(400).send({ error:true, message: 'Please provide nom/prenom/annee' });
    }
    else {
        Teacher.creatTeacher(newTeacher, (err, teacher) => {
            if (err) {
                res.send(err)
            } else {
                res.json(newTeacher)
            }
        })
    }
}