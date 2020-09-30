'use strict'
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const trapDisparador = require("./../../../lib/dnd35/operaciones/trapDisparador");
const trapRearme = require("./../../../lib/dnd35/operaciones/trapRearme");
const trapDesactivacion = require("./../../../lib/dnd35/operaciones/trapDesactivacion");
const trapEfecto = require("./../../../lib/dnd35/operaciones/trapEfecto");
const trapDano = require("./../../../lib/dnd35/operaciones/trapDano");
//Validaciones custom
router.post('/',
    async (req, res, next) => {
        try {
            const newTrap = {};
            newTrap.disparador = trapDisparador();
            newTrap.rearme = trapRearme()
            newTrap.desactivacion = trapDesactivacion();
            newTrap.efecto = trapEfecto();
            newTrap.dano = trapDano(newTrap.efecto[0]);
            //Respondemos
            res.json(newTrap);

        }
        catch (err) {
            next(err);
        }
    });

module.exports = router;