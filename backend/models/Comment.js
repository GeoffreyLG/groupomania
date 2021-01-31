const mysql = require('./db');

exports.createComment = function (comment) {
    return new Promise((resolve, reject) => {
        const newComment = {
            COMMENTAIRE: comment.commentaire,
            USER_ID: comment.user_id,
            ARTICLE_ID: comment.article_id

        }
        mysql.query('INSERT INTO `commentaire` SET ? ', newComment, function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};
exports.updateComment = function (comment) {
    return new Promise((resolve, reject) => {
        mysql.query('UPDATE `commentaire` SET COMMENTAIRE = ? WHERE ID = ?', [comment.commentaire, comment.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.deleteComment = function (comment) {
    return new Promise((resolve, reject) => {
        mysql.query('DELETE FROM `commentaire` WHERE ID = ?', [comment.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.findOne = function (comment) {
    return new Promise((resolve, reject) => {
        mysql.query('SELECT `COMMENTAIRE`, `ARTICLE_ID` FROM `commentaire` WHERE ID = ? ', [comment.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

exports.findAll = function () {
    return new Promise((resolve, reject) => {
        mysql.query(' SELECT * FROM `commentaire`', function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};