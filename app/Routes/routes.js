var studentController = require('../Controller/studentController')
var teacherContoller = require('../Controller/teacherController')
var utilisaeurController = require('../Controller/utilisateurController')

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json({ 'message': "Welcome to TP IGL" })
    })
    
    app.get('/Students/all', studentController.getAllStudents)

    app.post('/Students/add', studentController.addStudent)

    app.post('/Teachers/add', teacherContoller.addTeacher)

    app.get('/Teachers/all', teacherContoller.getAllTeachers)

    app.post('/Utilisateurs/add', utilisateurContoller.addUtilisateur)

    app.get('/Utilisateurs/all', utilisateurContoller.getAllUtilisateurs)
}