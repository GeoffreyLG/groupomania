/*modèle de données*/
/*middleware*/
const mysql = require('./db')
/*plugin*/

exports.createUser = function (user, hash) {
    return new Promise((resolve,reject ) => {
        const newUser = {
            NOM: user.nom,
            PRENOM: user.prenom,
            EMAIL: user.email,
            PASSWORD: hash,
        }
        mysql.query('INSERT INTO `utilisateurs` SET ? ', newUser, function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.findOne = function (email) {
    return new Promise((resolve,reject ) => {        
        mysql.query('SELECT * FROM `utilisateurs` WHERE email= ? ', [email], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};








