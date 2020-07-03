'use strict'
var express = require('express');
var router = express.Router();
const Pnj = require('./../../models/pnj');
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

module.exports = router;