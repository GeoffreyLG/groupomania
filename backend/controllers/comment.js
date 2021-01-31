//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');


const modelComment = require('../models/Comment');

exports.createComment = async (req, res, next) => {
    const newComment = await modelComment.createComment(req.body)
    if (newComment.affectedRows > 0) {
        return res.status(201).send(' Commentaire créé ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.modifyComment = async (req, res, next) => {
    console.log('Commentaire modifié !', req.body)
    const comment = {
        commentaire: req.body.commentaire,
        id: req.params.id
    }
    const updateComment = await modelComment.updateComment(comment)
    if (updateComment.affectedRows > 0) {
        return res.status(201).send(' Commentaire modifié ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.deleteComment = async (req, res, next) => {
    const comment = {
        id: req.params.id
    }
    const deleteComment = await modelComment.deleteComment(comment)
    if (deleteComment.affectedRows > 0) {
        return res.status(201).send(' Commentaire supprimé ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.findOne = async (req, res, next) => {
    const comment = {
        id: req.params.id
    }
    const findOne = await modelComment.findOne(comment)
    res.status(200).json({ findOne })
};

exports.findAll = async (req, res, next) => {
    const findAll = await modelComment.findAll()
    res.status(200).json({ findAll })
};