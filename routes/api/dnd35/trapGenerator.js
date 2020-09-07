'use strict'
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
//Validaciones custom
router.post('/',
    async (req, res, next) => {
        try {
            //Por ahora van a ser trampas mecánicas, ya que las trampas mágicas requeririan de conjuros.
            res.send("Hi");

        }
        catch (err) {
            next(err);
        }
    });

module.exports = router;