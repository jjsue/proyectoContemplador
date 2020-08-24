'use strict'
var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
//Validaciones custom
router.post('/',
    async (req, res, next) => {
        try {
            res.send("Hi");

        }
        catch (err) {
            next(err);
        }
    });

module.exports = router;