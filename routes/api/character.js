'use strict'
var express = require('express');
var router = express.Router();
const Pnj = require('./../../models/pnj');
router.get('/', async (req, res, next) => {
    try {
        const filtro = {};
        var sort = '_id';
        var skip = 0;
        var limit = 100;
        const fields = 'name clase nivel raza';
        filtro.isPublic = true; //Nos aseguramos que los personajes que listamos son los publicos.
        if (req.query.name !== undefined) {
            filtro.name = new RegExp(req.query.name, "gi");
        }
        if (req.query.race !== undefined) {
            filtro.raza = req.query.sell;
        }
        if (req.query.orderby !== undefined && (req.query.orderby === 'name' || req.query.orderby === 'price')) {
            sort = req.query.orderby;
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