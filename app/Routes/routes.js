var studentController = require('../Controller/studentController')

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.json({ 'message': "Welcome to TP IGL" })
    })
    
    app.get('/Students/all', studentController.getAllStudents)

    app.post('/Students/add', studentController.addStudent)
}