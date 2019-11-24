var sql = require('./db.js')

var Utilisateur = (utilisateur) => {
    this.nomutilisateur = utilisateur.nomutilisateur
    this.mdp = utilisateur.mdp
}


Utilisateur.creatUtilisateur = (newutilisateur, result) => {
    sql.query("INSERT INTO admins SET ?", newutilisateur, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId);
        }
    })
}

Utilisateurs.getAllUtilisateurs = (result) => {
    sql.query("SELECT * FROM admins", (err, res) => {
        console.log('Model')
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            console.log('admins: ', res)
            result(null, res)
        }
    })
}

module.exports = Utilisateur