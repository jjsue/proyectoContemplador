'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const Pnj = require('./../../models/pnj');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
router.post('/',
    [
        check('authToken').isJWT(),
        check('character').isMongoId(),
    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            //Lo primero es comprobar si el usuario está autenticado.
            let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
            let characterId = req.body.character;
            if (characterId !== undefined) {
                //Ahora a buscar en la base de datos.
                const characterFound = await Pnj.findById(characterId);
                if (characterFound.creatorId === userId._id) {
                    res.status(200).json({ result: characterFound.isPublic });
                } else {
                    res.status(401).json({ result: "No autorizado" });
                }
            } else {
                res.status(500).json({ result: "Algo ha fallado" });
            }
        }
        catch (err) {
            next(err);
        }
    });
router.put('/',
    [
        check('authToken').isJWT(),
        check('character').isMongoId(),
        check('public').isString(),
    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
            let characterId = req.body.character;
            let toChange = req.body.public;
            if (characterId !== undefined) {
                //Ahora a buscar en la base de datos.
                const characterFound = await Pnj.findById(characterId);
                if (characterFound.creatorId === userId._id) {
                    if (toChange === 'no') {
                        const updateProcess = await Pnj.findOneAndUpdate({ _id: characterId }, { isPublic: false });
                        res.status(201).json({ result: "Personaje privado" });
                    }
                    else if (toChange === 'yes') {
                        const updateProcess = await Pnj.findOneAndUpdate({ _id: characterId }, { isPublic: true });
                        res.status(201).json({ result: "Personaje publico" });
                    } else {
                        res.status(400).json({ result: "Ni lo uno ni lo otro" });
                    }
                } else {
                    res.status(401).json({ result: "No autorizado" });
                }
            } else {
                res.status(500).json({ result: "Algo ha fallado" });
            }
        }
        catch (err) {
            next(err);
        }
    });
router.delete('/',
    [
        check('authToken').isJWT(),
        check('character').isMongoId(),
    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
            let characterId = req.body.character;
            if (characterId !== undefined) {
                //Ahora a buscar en la base de datos.
                const characterFound = await Pnj.findById(characterId);
                if (characterFound.creatorId === userId._id) {
                    const deletionResult = await Pnj.deleteOne({ _id: characterId });
                    res.status(204).send("ok");
                } else {
                    res.status(401).json({ result: "No autorizado" });
                }
            } else {
                res.status(500).json({ result: "Algo ha fallado" });
            }
        }
        catch (err) {
            next(err);
        }
    });

module.exports = router;