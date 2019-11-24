var Utilisateur = require('../Model/utilisateurModel')

exports.getAllUtilisateurs = (req, res) => {
    console.log('getAllUtilisateurs controller !')
    Utilisateur.getAllUtilisateurs((err, utilisateur) => {
        console.log(utilisateur)
        if (err) {
            res.send(err)
        } else {
            res.send(utilisateur)
        }
    })
}

exports.addUtilisateur = (req, res) => {
    console.log('addUtilisateur controller !')

    var newUtilisateur = req.body
    console.log(newUtilisateur)

    if (!newUtilisateur.nomutilisateur || !newUtilisateur.mdp) {
        res.status(400).send({ error:true, message: 'Please provide nom utilisateur/mot de passe' });
    }
    else {
        Teacher.creatUtilisateur(newUtilisateur, (err, utilisateur) => {
            if (err) {
                res.send(err)
            } else {
                res.json(newUtilisateur)
            }
        })
    }
}