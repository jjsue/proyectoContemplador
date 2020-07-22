'use strict'
var express = require('express');
var router = express.Router();
const User = require('./../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

router.post('/', 
[
    check('email').isEmail(),
    check('password').isString(),
],
async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const bodyMail = req.body.email;
        const password = req.body.password;
        const userFound = await User.findOne({ email: bodyMail });
        if (userFound === null || !await bcrypt.compare(password, userFound.password)) {
            return res.status(401).json({ errors: 'Username or password wrong' });
        } else {
            const tokenCreated = jwt.sign({ _id: userFound._id }, process.env.JWT_PASS, {
                expiresIn: '15d',
            });
            res.cookie('authToken', tokenCreated, {
                maxAge: 1000 * 60 * 60 * 60 * 24 * 15,
                httpOnly: true,
                secure: true,
                sameSite: true,
            });
            res.cookie('userName', userFound.userName, {
                maxAge: 1000 * 60 * 60 * 60 * 24 * 15,
                httpOnly: false,
                secure: true,
                sameSite: true,
            });
            res.json({
                authToken: tokenCreated,
                userName: userFound.userName,
            });
        }
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;