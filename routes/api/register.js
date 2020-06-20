'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

router.post('/',
    [
        check('userName').isString(),
        check('email').isEmail(),
        check('password').isString(),
    ],
    async (req, res, next) => {
        try {
            //Validamos los check del express-validator
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            } else {
                const postDataToSave = new User(req.body);
                postDataToSave.password = await User.cifrado(req.body.password);
                const postDataSaved = await postDataToSave.save();
                res.status(201).json({ result: `user created` });
            }
        }
        catch (err) {
            console.log(err.code);
            if (err.code === 11000) {
                if (err.keyValue.userName !== undefined) {
                    res.status(403).json({ error: 'Username already exists' });
                }
                if (err.keyValue.email !== undefined) {
                    res.status(403).json({ error: 'Email already exists' });
                }
            } else {
                next(err);
            }
        }
    });

module.exports = router;