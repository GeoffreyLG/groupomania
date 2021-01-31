//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const modelArticle = require('../models/Articles');

exports.createArticle = async (req, res, next) => {
    const newArticle = await modelArticle.createArticle(req.body)
    if (newArticle.affectedRows > 0) {
        return res.status(201).send(' Article créé ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.modifyArticle = async (req, res, next) => {
    console.log('article créé !', req.body)
    const article = {
        contenu: req.body.contenu,
        image: req.body.image,
        id: req.params.id
    }
    const updateArticle = await modelArticle.updateArticle(article)
    if (updateArticle.affectedRows > 0) {
        return res.status(201).send(' Article modifié ! ')
    }
    else {
        res.status(500).send('error')
    }
};
exports.deleteArticle = async (req, res, next) => {
    const article = {
        id: req.params.id
    }
    const deleteArticle = await modelArticle.deleteArticle(article)
    if (deleteArticle.affectedRows > 0) {
        return res.status(201).send(' Article supprimé ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.findOne = async (req, res, next) => {
    const article = {
        id: req.params.id
    }
    const findOne = await modelArticle.findOne(article)
    res.status(200).json({ findOne })
};

exports.findAll = async (req, res, next) => {
    const findAll = await modelArticle.findAll()
    res.status(200).json({ findAll })
};
