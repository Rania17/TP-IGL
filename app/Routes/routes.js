var studentController = require('../Controller/studentController')
var teacherContoller = require('../Controller/teacherController')

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json({ 'message': "Welcome to TP IGL" })
    })
    
    app.get('/Students/all', studentController.getAllStudents)

    app.post('/Students/add', studentController.addStudent)

    app.post('/Teachers/add', teacherContoller.addTeacher)

    app.get('/Teachers/all', teacherContoller.getAllTeachers)
}