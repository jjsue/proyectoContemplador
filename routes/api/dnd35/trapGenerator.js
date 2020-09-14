'use strict'
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const trapDisparador = require("./../../../lib/dnd35/operaciones/trapDisparador");
const trapRearme = require("./../../../lib/dnd35/operaciones/trapRearme");
const trapDesactivacion = require("./../../../lib/dnd35/operaciones/trapDesactivacion");
//Validaciones custom
router.post('/',
    async (req, res, next) => {
        try {
            const newTrap = {};
            newTrap.disparador = trapDisparador();
            newTrap.rearme = trapRearme()
            newTrap.desactivacion = trapDesactivacion();
            
            //Respondemos
            res.json(newTrap);

        }
        catch (err) {
            next(err);
        }
    });

module.exports = router;