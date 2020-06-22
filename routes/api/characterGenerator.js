'use strict'
var express = require('express');
var router = express.Router();
const habilidades = require('./../../lib/tablas/skills');
//const clases = require('./lib/tablas/characterBase');
router.post('/', async (req, res, next) => {
    try {
        console.log(habilidades);
        res.json({ Hola: "Hi" });
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;