const mysql = require('./db');

exports.createArticle = function (article) {
    return new Promise((resolve, reject) => {
        const newArticle = {
            CONTENU: article.contenu,
            IMAGE: article.image,
            USER_ID: article.user_id
        }
        mysql.query('INSERT INTO `articles` SET ? ', newArticle, function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.updateArticle = function (article) {
    return new Promise((resolve, reject) => {
        mysql.query('UPDATE `articles` SET CONTENU = ?, IMAGE = ?  WHERE ID = ?', [article.contenu, article.image, article.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.deleteArticle = function (article) {
    return new Promise((resolve, reject) => {
        mysql.query('DELETE FROM `articles` WHERE ID = ?', [article.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.findOne = function (article) {
    return new Promise((resolve, reject) => {
        mysql.query('SELECT `CONTENU`, `IMAGE` FROM `articles` WHERE ID = ? ', [article.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.findAll = function () {
    return new Promise((resolve, reject) => {
        mysql.query('SELECT * FROM `articles`', function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};
