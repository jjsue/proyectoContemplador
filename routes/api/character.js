'use strict'
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Pnj = require('./../../models/pnj');
const User = require('./../../models/user');
const { query } = require('express');
router.get('/', async (req, res, next) => {
    try {
        const filtro = {};
        let orderBy = req.query.sort === 'old' ? 1 : -1 //Ordenar por mas reciente o mas antiguo, por defecto ordena por reciente
        var sort = { creationDate: orderBy };
        var skip = 0;
        var limit = 100;
        const fields = 'name clase nivel raza';
        filtro.isPublic = true; //Nos aseguramos que los personajes que listamos son los publicos.
        if (req.query.name !== undefined) {
            filtro.name = new RegExp(req.query.name, "gi");
        }
        if (req.query.race !== undefined) {
            filtro.raza = new RegExp(req.query.race, "gi");
        }
        if (req.query.class !== undefined) {
            filtro.clase = new RegExp(req.query.class, "gi");
        }
        if (req.query.levelMax !== undefined && req.query.levelMin !== undefined) {
            if (isNaN(parseInt(req.query.levelMin)) || isNaN(parseInt(req.query.levelMax))) {
                filtro.nivel = { $gte: 1, $lte: 20 }
            } else {
                filtro.nivel = { $gte: parseInt(req.query.levelMin), $lte: parseInt(req.query.levelMax) } //Si ambos son numeros creamos de este modo el filtro
            }
        }
        if (req.query.skip !== undefined) {
            skip = parseInt(req.query.skip);
        }
        if (req.query.limit !== undefined) {
            limit = parseInt(req.query.limit);
        }
        const response = await Pnj.lista(filtro, sort, skip, limit, fields);
        const docs = response;
        res.json(docs);
    }
    catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        if (req.body.id !== undefined) { //Si enviamos un id de personaje devolvemos un solo personaje
            const pnjId = req.body.id;
            const pnjFound = await Pnj.findById(pnjId, (err, pnj) => {
                if (err) {
                    return next(err);
                }
            });
            if (pnjFound.isPublic) {
                var toReturn = JSON.parse(JSON.stringify(pnjFound));
                delete toReturn.creatorId;
                delete toReturn.isPublic;
                return res.send(toReturn);
            } else if (req.cookies.authToken !== undefined) {
                let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
                if (userId._id === pnjFound.creatorId) {
                    var toReturn = JSON.parse(JSON.stringify(pnjFound));
                    delete toReturn.creatorId;
                    delete toReturn.isPublic;
                    return res.send(toReturn);
                } else {
                    return res.status(401).json({ result: "No tienes permiso para ver este personaje" });
                }
            } else {
                return res.status(401).json({ result: "No tienes permiso para ver este personaje" });
            }
        } else if (req.cookies.authToken !== undefined) { //Si no enviamos id especifico nos devuelve una lista de nuestros propios personajes
            let userId = jwt.verify(req.cookies.authToken, process.env.JWT_PASS);
            const filtro = {};
            let orderBy = - 1
            var sort = { creationDate: orderBy };
            var skip = 0;
            var limit = 1000;
            const fields = 'name clase nivel raza';
            filtro.creatorId = userId._id;
            const listOfOwn = await Pnj.lista(filtro, sort, skip, limit, fields);
            const userName = await User.findById(userId._id);
            const response = {
                characterArray: listOfOwn,
                user: userName.userName,
            }
            return res.send(response);
        } else {
            return res.status(401).json({ result: "No tienes permiso para ver esto" });
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;